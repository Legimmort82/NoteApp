import Layout from "@/components/Layouts/Layout";
import NoteCard from "@/components/NoteCard";
import refreshImg from "@/assets/icons/note-card-icons/refresh.svg";
import editImg from "@/assets/icons/note-card-icons/edit.svg";
import trashImg from "@/assets/icons/note-card-icons/trash.svg";
import truncateText from "@/hooks/truncateText";
import { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import axios from "axios";


function trashes() {

  const { isLoading, data, isError, error, refetch } = useQuery('note-data', () => {
    return axios.get("http://localhost:4000/notes")
    }, { refetchOnMount: true, refetchOnWindowFocus: true }) 
  const notesFilter = data?.data.filter((note) => note.isTrash == true);
  
  const updateNote = ({ note, id }) => {
    return axios.put(`http://localhost:4000/notes/${id}`, note);
  };
  const mutationUpdate = useMutation({
    mutationKey: ["update"],
    mutationFn: updateNote,
  });

  const RestoreNote = (id) => {
    const singleNote = notesFilter.find((note) => note.id === id);
    const note = { ...singleNote, isTrash: false };
    mutationUpdate.mutate(
      { note, id },
      {
        onSuccess: (res) => {
          console.log(res);
          refetch()
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  const UpdateDeleteNote = ({id}) => {
    return axios.delete(`http://localhost:4000/notes/${id}`);
  }
  const mutationDelete = useMutation({
    mutationKey: ["delete"],
    mutationFn: UpdateDeleteNote,
  });

  const DeleteNote = (id) => {
    mutationDelete.mutate(
      { id },
      {
        onSuccess: (res) => {
          console.log(res);
          refetch()
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  }

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

          <div className="flex flex-col items-center md:items-start md:pl-[96px] md:pr-10">
            <h1 className="py-7  text-Primary-500 text-[55px] font-bold md:self-start">
              Trashes
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
                    img1={editImg}
                    img2={refreshImg}
                    img3={trashImg}
                    color={item.color}
                    onClick1={() => RestoreNote(item.id)}
                    onClick2={() => DeleteNote(item.id)}
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

export default trashes;
