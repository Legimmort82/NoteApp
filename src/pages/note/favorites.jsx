import Layout from "@/components/Layout";
import trashimg from "@/assets/icons/trash.svg";
import favoriteimg from "@/assets/icons/favorite.svg";
import editimg from "@/assets/icons/edit.svg";
import NoteCard from "@/components/NoteCard";
import truncateText from "@/hooks/truncateText";
import { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/context/Firebase";
import { useQuery } from "react-query";
import axios from "axios";

function favorites() {

  const { isLoading, data, isError, error } = useQuery('note-data', () => {
    return axios.get("http://localhost:4000/notes")
  }, {refetchOnMount: true , refetchOnWindowFocus:true})

  const notesFilter = data?.data.filter((note) => note.isFavorite == true && note.isTrash == false) ;

  if (isLoading) {
    return <h2>LOADING ...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }
  
  return (
    <>
      <Layout>
        <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-x-clip overflow-y-auto">
          <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 dark:shadow-none" />

          <div className="flex flex-col md:items-start  md:pl-[96px] md:pr-10">
            <h1 className="py-7 text-Primary-500 text-[55px] font-bold md:self-start">
              Favorites
            </h1>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-9 pb-10">
              {notesFilter?.map((item) => {
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
