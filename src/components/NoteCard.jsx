import { db } from "@/context/Firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function NoteCard({
  title,
  description,
  date,
  img1,
  img2,
  img3,
  img4,
  img5,
  color,
  id,
}) {
  const NoteCollection = collection(db, "Notes");
  const [notes, setNotes] = useState([]);
  const singleNote = notes.find((note) => note.id == id);

  const ChangeTrashStatus = async () => {
    const NoteDoc = doc(db, "Notes", id);
    if (singleNote?.isTrash == false) {
      try {
        await updateDoc(NoteDoc, { isTrash: true });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const RestoreNote = async () => {
    const NoteDoc = doc(db, "Notes", id);
    if (singleNote?.isTrash == true) {
      try {
        await updateDoc(NoteDoc, { isTrash: false });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const ChangeFavoriteStatus = async () => {
    const NoteDoc = doc(db, "Notes", id);
    console.log(singleNote);
    if (singleNote?.isFavorite == true) {
      try {
        await updateDoc(NoteDoc, { isFavorite: false });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await updateDoc(NoteDoc, { isFavorite: true });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const DeleteNote = async () => {
    const NoteDoc = doc(db, "Notes", id);
    try {
      await deleteDoc(NoteDoc);
    } catch (error) {
      console.log(error);
    }
  };

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
    <div
      className={`flex bg-white flex-col justify-between w-[30%] rounded-md px-4 py-3`}
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
            <Image className="w-[25px] ml-2 cursor-pointer" src={img1} alt="" />
          </Link>
          {img2 && (
            <Image
              className="w-[25px] ml-2 cursor-pointer duration-500 hover:rotate-[360deg]"
              src={img2}
              onClick={ChangeFavoriteStatus}
              alt=""
            />
          )}

          {img3 && (
            <Image
              className="w-[25px] ml-2 cursor-pointer"
              src={img3}
              alt=""
              onClick={ChangeTrashStatus}
            />
          )}

          {img4 && (
            <Image
              className="w-[25px] ml-2 cursor-pointer"
              src={img4}
              alt=""
              onClick={RestoreNote}
            />
          )}
          {img5 && (
            <Image
              className="w-[25px] ml-2 cursor-pointer"
              src={img5}
              alt=""
              onClick={DeleteNote}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
