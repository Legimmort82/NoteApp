import Layout from "@/components/Layout";
import trashimg from "@/assets/icons/trash.svg"
import notfavoriteimg from "@/assets/icons/not-favorite.svg"
import favoriteimg from "@/assets/icons/favorite.svg";
import editimg from "@/assets/icons/edit.svg"
import NoteCard from "@/components/NoteCard";
import { darkModeNoteContext } from "@/context/DarkModeNoteContext";
import { useContext } from "react";
import truncateText from "@/hooks/truncateText";

function allnotes() {
  const {notes, setNotes} = useContext(darkModeNoteContext)

  const notesFilter = notes.filter((note) => note.isTrash != true)

  return (

    
    <>
    <Layout>
    <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-clip">
        <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] dark:shadow-none shadow-md shadow-gray-400 "/>

        <div className="px-24">
          <h1 className="py-7  text-Primary-500 text-[55px] font-bold">Allnotes</h1>

          <div className="flex flex-wrap gap-9">
          {notes.map((item) => {
            const truncatedDesc = truncateText(item.description , 25)
            const truncatedTitle = truncateText(item.title , 12)

              return (
                <NoteCard
                  key={item.id}
                  id={item.id}
                  title={truncatedTitle}
                  date={item.date}
                  description={truncatedDesc}
                  img1={editimg} 
                  img2={item.isFavorite ? favoriteimg : notfavoriteimg}
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

export default allnotes