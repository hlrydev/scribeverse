import React, { useState } from "react";
import { Trash2, Plus, Palette } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Note {
  id: number;
  title: string;
  description: string;
  color: string;
}

interface ColorOption {
  name: string;
  bg: string;
  border: string;
}

interface ColorCodedNotesProps {
  notes?: Note[];
  onAddNote?: (note: Omit<Note, "id">) => void;
  onUpdateNote?: (id: number, note: Omit<Note, "id">) => void;
  onDeleteNote?: (id: number) => void;
}

const ColorCodedNotes: React.FC<ColorCodedNotesProps> = ({
  notes: externalNotes,
  onAddNote,
  onUpdateNote,
  onDeleteNote,
}) => {
  // Default demo data for standalone use
  const [internalNotes, setInternalNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Morning Routine",
      description: "Scream for no reason at 4 am.",
      color: "blue",
    },
    {
      id: 2,
      title: "Gift Delivery",
      description: "Meow meow you are my owner so here is a dead rat dead",
      color: "yellow",
    },
    {
      id: 3,
      title: "Attention Request",
      description: "Please stop looking at your phone and pet me",
      color: "purple",
    },
  ]);

  // Use external notes if provided, otherwise use internal state
  const notes = externalNotes || internalNotes;
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteDescription, setNoteDescription] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("blue");

  const colors: ColorOption[] = [
    { name: "blue", bg: "bg-blue-200", border: "border-blue-300" },
    { name: "yellow", bg: "bg-yellow-200", border: "border-yellow-300" },
    { name: "purple", bg: "bg-purple-200", border: "border-purple-300" },
    { name: "green", bg: "bg-green-200", border: "border-green-300" },
    { name: "pink", bg: "bg-pink-200", border: "border-pink-300" },
    { name: "orange", bg: "bg-orange-200", border: "border-orange-300" },
    { name: "red", bg: "bg-red-200", border: "border-red-300" },
    { name: "indigo", bg: "bg-indigo-200", border: "border-indigo-300" },
    { name: "teal", bg: "bg-teal-200", border: "border-teal-300" },
    { name: "slate", bg: "bg-slate-200", border: "border-slate-300" },
  ];

  const getColorClasses = (colorName: string): ColorOption => {
    const color = colors.find((c) => c.name === colorName);
    return color || colors[0];
  };

  const handleAddNoteClick = (): void => {
    setEditingNote(null);
    setNoteTitle("");
    setNoteDescription("");
    setSelectedColor("blue");
    setIsDialogOpen(true);
  };

  const handleEditNoteClick = (note: Note): void => {
    setEditingNote(note);
    setNoteTitle(note.title);
    setNoteDescription(note.description);
    setSelectedColor(note.color);
    setIsDialogOpen(true);
  };

  const handleSaveNote = (): void => {
    if (!noteTitle.trim() || !noteDescription.trim()) return;

    const noteData = {
      title: noteTitle,
      description: noteDescription,
      color: selectedColor,
    };

    if (editingNote) {
      if (onUpdateNote) {
        onUpdateNote(editingNote.id, noteData);
      } else {
        // Fallback to internal state management
        setInternalNotes((prev) =>
          prev.map((note) =>
            note.id === editingNote.id ? { ...note, ...noteData } : note
          )
        );
      }
    } else {
      if (onAddNote) {
        onAddNote(noteData);
      } else {
        // Fallback to internal state management
        const newNote: Note = {
          id: Date.now(),
          ...noteData,
        };
        setInternalNotes((prev) => [...prev, newNote]);
      }
    }

    setIsDialogOpen(false);
    setEditingNote(null);
    setNoteTitle("");
    setNoteDescription("");
  };

  const handleDeleteNoteClick = (id: number): void => {
    if (onDeleteNote) {
      onDeleteNote(id);
    } else {
      // Fallback to internal state management
      setInternalNotes((prev) => prev.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="w-full font-['Lexend']">
      {/* Header */}
      <div className="bg-primary text-black p-4 rounded-t-lg font-medium text-lg flex items-center justify-between">
        <span>NOTES</span>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <button
              onClick={handleAddNoteClick}
              className="bg-white bg-opacity-20 hover:bg-primary rounded-full p-2 transition-colors"
            >
              <Plus size={20} className="text-black" />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md font-['Lexend']">
            <DialogHeader>
              <DialogTitle>
                {editingNote ? "Edit Note" : "Add New Note"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {/* Note Title Input */}
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                  placeholder="Enter note title..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Note Description Input */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={noteDescription}
                  onChange={(e) => setNoteDescription(e.target.value)}
                  placeholder="Enter note description..."
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Palette size={16} />
                  Select Color
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all ${
                        color.bg
                      } ${
                        selectedColor === color.name
                          ? "border-gray-800 scale-110"
                          : "border-gray-300 hover:scale-105"
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleSaveNote}
                  disabled={!noteTitle.trim() || !noteDescription.trim()}
                  className="flex-1 bg-primary hover:secondary disabled:bg-gray-300 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  {editingNote ? "Update Note" : "Add Note"}
                </button>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Notes List */}
      <div className="border-x border-b border-gray-300 rounded-b-lg overflow-hidden max-h-96 overflow-y-auto">
        {notes.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p>No notes yet. Click the + button to add your first note!</p>
          </div>
        ) : (
          notes.map((note) => {
            const colorClasses = getColorClasses(note.color);
            return (
              <div
                key={note.id}
                className={`${colorClasses.bg} ${colorClasses.border} border-b last:border-b-0 p-4 flex items-center justify-between group hover:shadow-sm transition-shadow cursor-pointer`}
                onClick={() => handleEditNoteClick(note)}
              >
                <div className="flex-1 pr-4">
                  <h3 className="font-medium text-gray-800 mb-1">
                    {note.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {note.description}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteNoteClick(note.id);
                  }}
                  className="opacity-60 hover:opacity-100 p-2 hover:bg-white hover:bg-opacity-50 rounded transition-all"
                  title="Delete note"
                >
                  <Trash2 size={18} className="text-gray-600" />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ColorCodedNotes;
