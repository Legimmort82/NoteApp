import Layout from "@/components/Layout";
import trashimg from "@/assets/icons/trash.svg"
import notfavoriteimg from "@/assets/icons/not-favorite.svg"
import editimg from "@/assets/icons/edit.svg"
import NoteCard from "@/components/NoteCard";
import { darkModeNoteContext } from "@/context/DarkModeNoteContext";
import { useContext } from "react";

function allnotes() {
  const {notes, setNotes} = useContext(darkModeNoteContext)

  return (
    <>
    <Layout>
    <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-clip">
        <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 "></div>

        <div className="px-24">
          <h1 className="py-7  text-Primary-500 text-[55px] font-bold">Allnotes</h1>

          <div className="flex justify-between">
          {notes.map((item) => {
            const truncateText = item.description.slice(0,25).concat('...')
              return (
                <NoteCard
                  key={item.id}
                  folderName={item.folder}
                  date={item.date}
                  description={truncateText}
                  img1={editimg} 
                  img2={notfavoriteimg}
                  img3={trashimg}
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