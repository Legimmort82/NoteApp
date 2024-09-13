import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import CustomToast from "./CustomToast";
import { db } from "@/context/Firebase";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
        await updateDoc(NoteDoc, { isTrash: true }).then(() => {
          toast.custom(
            (t) => <CustomToast text="Note moved to trash page" color="red" />,
            {
              position: "top-center",
              duration: 3000,
            }
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const RestoreNote = async () => {
    const NoteDoc = doc(db, "Notes", id);
    if (singleNote?.isTrash == true) {
      try {
        await updateDoc(NoteDoc, { isTrash: false }).then(() => {
          toast.custom(
            (t) => (
              <CustomToast text="Note restored successfully" color="green" />
            ),
            {
              position: "top-center",
              duration: 3000,
            }
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const ChangeFavoriteStatus = async () => {
    const NoteDoc = doc(db, "Notes", id);
    if (singleNote?.isFavorite == true) {
      try {
        await updateDoc(NoteDoc, { isFavorite: false }).then(() => {
          toast.custom(
            (t) => (
              <CustomToast text="Note is not favorite yet" color="green" />
            ),
            {
              position: "top-center",
              duration: 3000,
            }
          );
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await updateDoc(NoteDoc, { isFavorite: true }).then(() => {
          toast.custom(
            (t) => (
              <CustomToast text="Note is now a favorite note" color="green" />
            ),
            {
              position: "top-center",
              duration: 3000,
            }
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const DeleteNote = async () => {
    const NoteDoc = doc(db, "Notes", id);
    toast.custom(
      () => (
        <CustomToast
          text="Do you want to delete this note permanently?"
          color="red"
          isDelete={true}
          onClick={async () => {
            try {
              await deleteDoc(NoteDoc).then(() => {
                toast.custom(
                  () => (
                    <CustomToast
                      text="Note deleted permanently !!!"
                      color="green"
                    />
                  ),
                  {
                    position: "top-center",
                    duration: 3000,
                  }
                );
              });
            } catch (error) {
              console.log(error);
            }
          }}
        />
      ),
      {
        position: "top-center",
        duration: 5000,
      }
    );
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
              className="w-[25px] ml-2 cursor-pointer duration-500 hover:rotate-[-360deg]"
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
          <Toaster />
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
