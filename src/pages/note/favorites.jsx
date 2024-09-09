import Layout from "@/components/Layout";
import trashimg from "@/assets/icons/trash.svg"
import favoriteimg from "@/assets/icons/favorite.svg"
import editimg from "@/assets/icons/edit.svg"
import NoteCard from "@/components/NoteCard";
import { darkModeNoteContext } from "@/context/DarkModeNoteContext";
import { useContext } from "react";

function favorites() {
  const {notes, setNotes} = useContext(darkModeNoteContext)

  const notesFilter = notes.filter((note) => note.isFavorite == true)
  return (
    <>
    <Layout>
    <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-clip">
        <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 dark:shadow-none"/>

        <div className="px-24">
          <h1 className="py-7  text-Primary-500 text-[55px] font-bold">Favorites</h1>

          <div className="flex justify-between">
            {notesFilter.map((item) => {
              const truncateText = item.description.slice(0,25).concat('...')
              const truncateTitle = item.title.slice(0,15).concat('...')
              return (
                <NoteCard
                key={item.id}
                title={truncateTitle}
                date={item.date}
                description={truncateText}
                img1={editimg} 
                img2={favoriteimg}
                img3={trashimg}
                color={item.color}
              />
              );
            })}
          </div>
        </div>  
    </div>
    </Layout>
    </>
  )
}

export default favorites