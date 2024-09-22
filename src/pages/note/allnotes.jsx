import Layout from "@/components/Layout";
import trashimg from "@/assets/icons/trash.svg";
import notfavoriteimg from "@/assets/icons/not-favorite.svg";
import favoriteimg from "@/assets/icons/favorite.svg";
import editimg from "@/assets/icons/edit.svg";
import NoteCard from "@/components/NoteCard";
import truncateText from "@/hooks/truncateText";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import axios from "axios";

function AllNotes() {
  const { isLoading, data, isError, error } = useQuery(
    "note-data",
    () => {
      return axios.get("http://localhost:4000/notes");
    },
    { refetchOnMount: true, refetchOnWindowFocus: true }
  );
  const updateNote = ({ note, id }) => {
    return axios.put(`http://localhost:4000/notes/${id}`, note);
  };
  const mutation = useMutation({
    mutationKey: ["update"],
    mutationFn: updateNote,
  });

  const notesFilter = data?.data.filter((note) => note.isTrash === false);
  console.log(notesFilter);
  if (isLoading) {
    return <h2>LOADING ...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const ChangeTrashStatus = (id) => {
    const singleNote = notesFilter.find((note) => note.id === id);
    const note = { ...singleNote, isTrash: true };
    mutation.mutate(
      { note, id },
      {
        onSuccess: (res) => {
          console.log(res);
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  return (
    <>
      <Layout>
        <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-x-clip overflow-y-auto">
          <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] dark:shadow-none shadow-md shadow-gray-400 " />

          <div className="flex flex-col items-center md:items-start  md:pl-[96px] md:pr-10">
            <h1 className="py-7 text-Primary-500 text-[55px] font-bold md:self-start">
              Allnotes
            </h1>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-9 pb-10">
              {notesFilter?.map((item) => {
                const truncatedDesc = truncateText(item.description, 25);
                const truncatedTitle = truncateText(item.title, 12);

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
                    onClick2={() => ChangeTrashStatus(item.id)}
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

export default AllNotes;
