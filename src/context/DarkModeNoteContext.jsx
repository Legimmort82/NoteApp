import { createContext, useState, React, useEffect } from "react";

const initialNote = [
  {
    id: 1,
    title: "Django",
    date: "2022/05/01",
    description: "I should learn this course in this week",
    color: "#F44336",
    tag: "team-Project",
    isFavorite: false,
    isTrash: true,
    folder: "Team",
  },
  {
    id: 2,
    title: "JS",
    date: "2023/07/21",
    description: "I should learn this course in this week from Youtube",
    color: "#2196F3",
    tag: "work-Project",
    isFavorite: false,
    isTrash: false,
    folder: "Works",
  },
  {
    id: 3,
    title: "SQL",
    date: "2024/11/24",
    description: "I should learn this course in this week from docs",
    color: "#4CAF50",
    tag: "my-job",
    isFavorite: true,
    isTrash: false,
    folder: "Personal",
  },
];

const darkModeNoteContext = createContext();

const DarkModeNoteProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [notes, setNotes] = useState(initialNote);

  useEffect(() => {
    const localData = localStorage.getItem("Notes");
    if (localData) {
      setNotes(JSON.parse(localData));
    }
  }, []);

  const createNote = (newNote) => {
    // console.log(newNote);
    setNotes([...notes, newNote]);
    localStorage.setItem("Notes", JSON.stringify([...notes, newNote]));
    // console.log(notes);
  };
  const updateNote = (noteId, updatedNote) => {
    const allNotes = notes.map((note) => {
      if (note.id != noteId) {
        return note;
      } else note = updatedNote;
      return note;
    });
    setNotes(allNotes);
    localStorage.setItem("Notes", allNotes);
  };
  const values = {
    dark,
    setDark,
    notes,
    setNotes,
    createNote,
    updateNote
  };

  return (
    <darkModeNoteContext.Provider value={values}>
      {children}
    </darkModeNoteContext.Provider>
  );
};

export { darkModeNoteContext, DarkModeNoteProvider };
