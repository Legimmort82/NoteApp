import { createContext, useState } from "react";

const initialNote = [
  {id: 0, 
   title: "Django",
   date: "2022/05/01", 
   description: "I should learn this course in this week", 
   color: "#70B857", 
   tag: "team-Project", 
   isFavorite: false, 
   isTrash: true, 
   folder :"Team",
  },
  {id: 1, 
    title: "JS", 
    date: "2023/07/021", 
    description: "I should learn this course in this week from Youtube",
    color: "#C1C52B", 
    tag: "work-Project", 
    isFavorite: false, 
    isTrash: false, 
    folder :"Works",
   },
   {id: 2, 
    title: "SQL", 
    date: "2024/11/24",
    description: "I should learn this course in this week from docs", 
    color: "#70B857", 
    tag: "my-job", 
    isFavorite: true, 
    isTrash: false, 
    folder :"Personal",
   }  
]

const darkModeNoteContext = createContext();

const DarkModeNoteProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [notes, setNotes] = useState(initialNote);

  const values = {
    dark,
    setDark,
    notes,
    setNotes
  };
  
  return (
    <darkModeNoteContext.Provider value={values}>
      {children}
    </darkModeNoteContext.Provider>
  );
};

export { darkModeNoteContext, DarkModeNoteProvider };
