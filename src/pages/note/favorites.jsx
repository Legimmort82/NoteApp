import Layout from "@/components/Layout";
import trashimg from "@/assets/icons/trash.svg";
import favoriteimg from "@/assets/icons/favorite.svg";
import editimg from "@/assets/icons/edit.svg";
import NoteCard from "@/components/NoteCard";
import truncateText from "@/hooks/truncateText";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/context/Firebase";

function favorites() {
  const NoteCollection = collection(db, "Notes");
  const [notes, setNotes] = useState([]);
  const notesFilter = notes.filter((note) => note.isFavorite == true && note.isTrash == false) ;

  useEffect(() => {
    const getNotes = async () => {
      try {
        const noteData = await getDocs(NoteCollection);
        const filteredData = noteData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setNotes(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    getNotes();
  }, [NoteCollection]);

  return (
    <>
      <Layout>
        <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-clip">
          <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 dark:shadow-none" />

          <div className="px-24">
            <h1 className="py-7  text-Primary-500 text-[55px] font-bold">
              Favorites
            </h1>

            <div className="flex justify-between">
              {notesFilter.map((item) => {
                const truncatedDesc = truncateText(item.description, 25);
                const truncatedTitle = truncateText(item.title, 12);
                return (
                  <NoteCard
                    key={item.id}
                    title={truncatedTitle}
                    date={item.date}
                    id={item.id}
                    description={truncatedDesc}
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
  );
}

export default favorites;
