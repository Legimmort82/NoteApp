// import {
//   collection,
//   deleteDoc,
//   doc,
//   getDocs,
//   updateDoc,
// } from "firebase/firestore";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import CustomToast from "./CustomToast";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useMutation, useQuery } from "react-query";

function NoteCard({
  title,
  description,
  date,
  img1,
  img2,
  img3,
  color,
  id,
  onClick1,
  onClick2
}) {
  // const NoteCollection = collection(db, "Notes");
  // const [notes, setNotes] = useState([]);
  // const singleNote = notes.find((note) => note.id == id);

  // const ChangeTrashStatus = async () => {
  //   const NoteDoc = doc(db, "Notes", id);
  //   if (singleNote?.isTrash == false) {
  //     try {
  //       await updateDoc(NoteDoc, { isTrash: true }).then(() => {
  //         toast.custom(
  //           (t) => <CustomToast text="Note moved to trash page" color="red" />,
  //           {
  //             position: "top-center",
  //             duration: 3000,
  //           }
  //         );
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };


  // const updateNote = (note) => {
  //   return axios.put(`http://localhost:4000/notes/${id}`, note)
  // }
  // const { mutate } = useMutation(updateNote);

  // const ChangeTrashStatus = () => {
  //   if(isTrash === false) {
  //     const note = {
  //       isTrash: true
  //     }
  //     mutate(note);
  //   }
  // }

  // const deleteNote = (note) => {
  //   return axios.delete(`http://localhost:4000/notes/${id}`, note)
  // }

  // const RestoreNote = async () => {

  // const ChangeFavoriteStatus = async () => {

  // const DeleteNote = async () => {

  

  return (
    <div
      className={
        "flex bg-white flex-col justify-between md:w-[30%] w-full min-w-[350px] rounded-md px-4 py-3 shadow-sm hover:shadow-lg duration-200 hover:scale-[1.01] dark:shadow-gray-600"
      }
      style={{ borderLeft: `8px solid ${color}`, borderColor: color }}
    >
      <div className="flex justify-between items-center mb-5">
        <p className="text-[25px] font-semibold">{title}</p>
        <p className="text-[18px] font-semibold">{date}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-[18px]">{description}</p>
        <div className="flex">
          <Link href={`/note/Edit/${id}`}>
            <Image className="w-[25px] mr-2 cursor-pointer" src={img1} alt="" />
          </Link>

            <Image
              onClick={onClick1}
              className="w-[25px] ml-2 cursor-pointer duration-500 hover:rotate-[360deg]"
              src={img2}
              alt=""
            />
  
            <Image
              onClick={onClick2}
              className="w-[25px] ml-2 cursor-pointer"
              src={img3}
              alt=""
            />
          {/* <Toaster /> */}
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
 Notecard.propTypes ={
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  onClick1:PropTypes.func,
 }