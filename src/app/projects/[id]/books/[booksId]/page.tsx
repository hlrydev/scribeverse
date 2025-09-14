"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@components/header_auth";
import {
  Trash2,
  Plus,
  Palette,
  Calendar as CalendarIcon,
  BookMarked,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import ExportButton from "@/components/export";
import ColorCodedNotes from "@components/notes";

export default function BookPage({
  params,
}: {
  params: { id: string; booksId: string };
}) {
  const { id, booksId } = params;
  const router = useRouter();

  // Due date state
  const [dueDate, setDueDate] = useState<Date>();

  const handleDelete = async () => {
    // call your backend to delete the project
    await fetch(`/api/projects/${params.id}`, {
      method: "DELETE",
    });

    // once deleted, send user back to its project page
    router.push(`/projects/${params.id}`);
  };

  // Chapters state management
  const [chapters, setChapters] = useState([
    { id: 1, title: "Chapter 1" },
    { id: 2, title: "Chapter 2" },
    { id: 3, title: "Chapter 3" },
  ]);

  // Handle delete chapter
  const handleDeleteChapter = (chapterId: number) => {
    setChapters(chapters.filter((chapter) => chapter.id !== chapterId));
  };

  // Mock data - replace with actual data fetching
  const projectName = `Project ${id}`;
  const bookName = "Dangerous Limits";

  // Chart data for 347856/600000 words
  const wordsWritten = 347856;
  const totalGoal = 600000;
  const progressPercentage = Math.round((wordsWritten / totalGoal) * 100);

  const chartData = [
    { name: "completed", value: progressPercentage, fill: "#ffae12" },
    { name: "remaining", value: 100 - progressPercentage, fill: "#1b1b1b" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 py-4">
        {/* Breadcrumb Navigation and Due Date */}
        <div className="flex justify-between items-center mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href={`/projects/${id}`}
                    className="text-foreground hover:text-primary"
                    style={{ fontFamily: "Lexend, sans-serif" }}
                  >
                    {projectName}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage
                  className="text-secondary font-medium"
                  style={{ fontFamily: "Lexend, sans-serif" }}
                >
                  {bookName}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Due Date Picker */}
          <div className="flex items-center gap-2">
            <span
              className="text-sm text-foreground font-medium"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              Due Date:
            </span>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[200px] justify-start text-left font-normal",
                    !dueDate && "text-muted-foreground"
                  )}
                  style={{ fontFamily: "Lexend, sans-serif" }}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dueDate ? format(dueDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={dueDate}
                  onSelect={setDueDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Radial Chart (1/4 space on desktop) */}
          <div className="w-full lg:w-1/4 flex flex-col items-center">
            <div className="w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {chartData.map((entry, i) => (
                      <Cell
                        key={`cell-${i}`}
                        fill={entry.fill}
                        style={{
                          filter:
                            entry.name === "completed"
                              ? "drop-shadow(0 0 8px rgba(255, 174, 18, 0.3))"
                              : "none",
                        }}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <p
              className="text-sm text-foreground mt-4 text-center"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              {wordsWritten.toLocaleString()}/{totalGoal.toLocaleString()} words
            </p>
          </div>

          {/* Right side - Book Content (3/4 space on desktop) */}
          <div className="w-full lg:w-3/4">
            {/* Book Title */}
            <h1
              className="text-4xl font-normal text-secondary mb-6 uppercase"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              DANGEROUS LIMITS
            </h1>

            {/* Book Cover and Description Side by Side */}
            <div className="flex gap-6 mb-8">
              {/* Book Cover */}
              <div className="bg-[#6b2c2c] rounded-sm shadow-lg border border-gray-400 flex-shrink-0 w-32 h-44 p-2">
                <div className="h-full flex flex-col justify-end">
                  <div className="flex-1 flex items-center justify-center">
                    <BookMarked
                      size={48}
                      className="text-white/80 group-hover:text-white transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3
                    className="text-white text-xs font-normal text-center leading-tight"
                    style={{ fontFamily: "Lexend, sans-serif" }}
                  >
                    DANGEROUS LIMITS
                  </h3>
                </div>
              </div>

              {/* Description Section */}
              <div className="flex-1">
                <p
                  className="text-foreground leading-relaxed"
                  style={{ fontFamily: "Lexend, sans-serif" }}
                >
                  Eat the rubberband lounge in doorway purrrrrrr so kitty
                  pounce, trip, faceplant you didn't see that no you didn't
                  definitely didn't lick, lick, lick, and preen away the
                  embarrassment. Behind the couch dismember a mouse and then
                  regurgitate parts of it on the family room floor so slap the
                  dog.
                </p>
              </div>
            </div>

            {/* Chapters Section */}
            <div className="w-full">
              {/* Header */}
              <div
                className="bg-primary text-black p-4 rounded-t-lg font-medium text-lg flex items-center justify-between"
                style={{ fontFamily: "Lexend, sans-serif" }}
              >
                <span>CHAPTERS</span>
                <button className="bg-white bg-opacity-20 hover:bg-primary rounded-full p-2 transition-colors">
                  <Plus size={20} className="text-black" />
                </button>
              </div>

              <ExportButton
                onExportDOCX={() => console.log("Exporting DOCX...")}
                onExportEPUB={() => console.log("Exporting EPUB...")}
                onExportPDF={() => console.log("Exporting PDF...")}
              />

              {/* Chapters List */}
              <div className="border-x border-b border-gray-300 rounded-b-lg overflow-hidden max-h-96 overflow-y-auto">
                {chapters.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <p>
                      No chapters yet. Click the + button to add your first
                      chapter!
                    </p>
                  </div>
                ) : (
                  chapters.map((chapter, index) => (
                    <div
                      key={chapter.id}
                      className={`bg-white border-b last:border-b-0 border-primary p-4 flex items-center justify-between group hover:bg-gray-50 transition-colors cursor-pointer`}
                    >
                      <div className="flex-1">
                        <span
                          className="text-foreground font-medium"
                          style={{ fontFamily: "Lexend, sans-serif" }}
                        >
                          {chapter.id}: {chapter.title}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteChapter(chapter.id);
                        }}
                        className="opacity-60 hover:opacity-100 p-2 hover:bg-gray-200 rounded transition-all"
                        title="Delete chapter"
                      >
                        <Trash2 size={18} className="text-gray-600" />
                      </button>
                    </div>
                  ))
                )}
              </div>
              <div className="mt-8">
                <ColorCodedNotes />
              </div>
              <div className="mt-14 mb-10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="completed"
                    className="w-5 h-5 rounded border-2 border-gray-300 text-primary focus:ring-primary focus:ring-2"
                  />
                  <label
                    htmlFor="completed"
                    className="text-foreground font-medium cursor-pointer"
                    style={{ fontFamily: "Lexend, sans-serif" }}
                  >
                    Mark as Completed
                  </label>
                </div>

                <Button variant="destructive" onClick={handleDelete}>
                  Delete Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
