# ✒️ ScribeVerse

**A writing workspace built for writers, authors, and fanfiction creators.**

ScribeVerse is a web app designed to bring writing, project organization, challenges, progress tracking, and writer-focused community features into one place. Instead of juggling a document editor, spreadsheets, writing challenges, and separate tools for every part of the writing process, ScribeVerse aims to give writers one dedicated workspace for their stories.

You can organize your writing into **projects, books, and chapters**, work on your drafts in a dedicated editor, track your progress, and eventually participate in challenges and community features designed specifically for writers. The goal isn't to replace every writing tool on the internet, but rather to create a place where writers can **write, organize, track, and participate** without needing five different apps.

> 🚧 **ScribeVerse is currently in development.**
> The project is being built toward an initial beta release.

---

## Planned Features

### Writing & Projects

* Projects for organizing different works
* Books within projects
* Chapters within books
* Rich-text writing editor
* Autosaving
* Word counts and writing statistics
* Notes and project organization
* Export options for finished work
* AO3-friendly export

### Writing Challenges

* Writing challenges
* Progress tracking
* Challenge participation
* Writing streaks
* Milestones and achievements

### 🪶 Writer Progress

ScribeVerse will eventually have its own progression system built around **feathers**. Rather than using a traditional badge system, writers can collect different feathers through writing milestones, challenges, and other activities. These collectibles will eventually connect to a larger ScribeVerse feature:

### 🦉 The Owlet

A future ScribeVerse update will introduce a small owl companion that grows alongside the writer. Feathers collected before the feature launches may become part of the progression system used to unlock an owlet.

---

## Tech Stack

ScribeVerse is currently being developed with:

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Supabase
* Tiptap - rich-text editing

The application is deployed using Vercel during development.

---

## Project Structure

The application uses Next.js App Router routing for its main writing hierarchy.

```text
app/
├── dashboard/
├── projects/
│   └── [projectId]/
│       ├── page.tsx
│       └── books/
│           └── [bookId]/
│               └── page.tsx
└── ...
```

Projects contain books, and books contain chapters, allowing the application to scale from a single draft to larger writing projects.

---

## Data & Authentication

ScribeVerse is being designed around authenticated user accounts and user-owned writing data.

Supabase will handle:

* Authentication
* PostgreSQL database
* User-owned projects
* Books and chapters
* Writing data
* Progress data
* Future community features

Row Level Security will be used to ensure users can access only the data they are authorized to view.

---

## Development Status

* [x] Landing page
* [x] Core application UI
* [x] Dashboard
* [x] Project management UI
* [x] Book/project navigation
* [x] Project creation flow
* [x] Project completion/deletion flows
* [x] Writing editor
* [ ] Notes
* [ ] Authentication
* [ ] Supabase database integration
* [ ] Autosave
* [ ] Chapter management
* [ ] Export system
* [ ] Writing challenges
* [ ] Feather collection
* [ ] Community features
* [ ] Owlet system

Features marked as planned are subject to change as development and beta testing progress.

---

## 📄 License

License information will be added before the first public release.
