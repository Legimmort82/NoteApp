import notedate from "@/assets/icons/note-date.svg";
import Layout from "@/components/Layout";
import Image from "next/image";
import CustomToast from "@/components/CustomToast";
import { db } from "@/context/Firebase";
import { useParams } from "next/navigation";
import { CirclePicker } from "react-color";
import { useEffect, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const EditNote = () => {
  const params = useParams();
  const NoteCollection = collection(db, "Notes");
  const [selectColor, setSelectColor] = useState("#F44336");
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const findNote = notes.find((note) => note.id == params?.noteId);
  console.log(typeof findNote?.id);
  console.log(NoteCollection?.name);
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
  }, []);
  const handelTitle = (e) => {
    setTitle(e.target.value);
  };
  const handelTag = (e) => {
    setTag(e.target.value);
  };
  const handelDesc = (e) => {
    setDesc(e.target.value);
  };

  useEffect(() => {
    if (findNote) {
      setDesc(findNote.description);
      setTag(findNote.tag);
      setTitle(findNote.title);
      setSelectColor(findNote.color);
      setDate(findNote.date);
    }
  }, [findNote]);

  const handleSubmit = async (id) => {
    try {
      const NoteDoc = doc(db, "Notes", findNote.id);
      await updateDoc(NoteDoc, {
        // id: params.noteId,
        title: title,
        date:
          new Date().getFullYear() +
          "/" +
          String(new Date().getMonth() + 1).padStart(2, "0") +
          "/" +
          String(new Date().getDate()).padStart(2, "0"),
        description: desc,
        color: selectColor,
        tag: tag,
        isFavorite: false,
        isTrash: false,
        folder: null,
      }).then(() => {
        toast.custom(
          (t) => <CustomToast text="Note edited successfully" color="green" />,
          {
            position: "top-center",
            duration: 3000,
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
    // updateNote(params.noteId, {
    //   id: params.noteId,
    //   title: title,
    //   date:
    //     new Date().getFullYear() +
    //     "/" +
    //     String(new Date().getMonth() + 1).padStart(2, "0") +
    //     "/" +
    //     String(new Date().getDate()).padStart(2, "0"),
    //   description: desc,
    //   color: selectColor,
    //   tag: tag,
    //   isFavorite: false,
    //   isTrash: false,
    //   folder: null,
    // });
  };

  return (
    <>
      <Layout>
        <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-x-clip overflow-y-auto">
          <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 dark:shadow-none" />

          <div className="lg:pl-36 lg:pr-40 pl-20 pr-20 py-7">
            <div className="mb-20 lg:mb-14">
              <input
                type="text"
                value={title}
                onChange={handelTitle}
                placeholder="Type your title here..."
                className="bg-Primary-100 px-2 outline-none w-full border-b-[5px] h-11 pb-3 border-b-Primary-600 text-[30px] font-semibold placeholder:text-[30px] dark:bg-dark-300 dark:text-white"
              />

              <div className=" flex justify-center md:justify-end items-center mt-3">
                <div className="flex items-center">
                  <p className="font-medium text-[18px] dark:text-white">
                    Color :
                  </p>
                  <div
                    className="w-8 h-8 rounded-[50%] ml-2 lg:ml-3"
                    style={{ backgroundColor: selectColor }}
                  ></div>
                </div>

                <div className="flex ml-[65px]">
                  <p className="text-gray-500 text-[17px] font-medium mr-2 dark:text-white">
                    {/* 2022/01/05 */}
                    {date}
                  </p>
                  <Image src={notedate} alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-20 lg:mb-10">
              <div className="flex flex-col items-center lg:w-[35%] mb-14 lg:mb-0">
                <p className="font-semibold text-[26px] mb-9 dark:text-white">
                  Pick a color :
                </p>

                <CirclePicker
                  color={selectColor}
                  onChangeComplete={(color) => setSelectColor(color.hex)}
                  circleSize={50}
                  width="100%"
                />
              </div>

              <div className="flex flex-col w-[80%] lg:w-[50%]">
                <p className="text-[26px] font-semibold dark:text-white">
                  Write your tag :
                </p>

                <div className="mt-8">
                  <input
                    type="text"
                    value={tag}
                    onChange={handelTag}
                    placeholder="Work"
                    className="bg-Primary-100 outline-none px-2 w-full border-b-[5px] h-11 text-[26px] font-medium text-gray-500 border-b-Primary-600 placeholder:text-[30px] dark:bg-dark-300 dark:text-gray-300"
                  />

                  {/* <p className="text-gray-400 text-[26px] font-semibold">Work</p>
                        <hr className="h-[4.5px]  bg-Primary-600 text-gray-500" /> */}
                </div>
              </div>
            </div>

            <textarea
              className="bg-Primary-100 resize-none text-[24px] rounded-lg border-[3px] w-[100%] h-[500px] lg:h-[400px] border-Primary-500 border-solid placeholder:text-gray-400  placeholder:font-medium p-4 dark:bg-dark-300 dark:text-white"
              type="text"
              value={desc}
              onChange={handelDesc}
              placeholder="Type your content here ..."
            />
            <button
              onClick={handleSubmit}
              className="bg-Primary-800 px-8 py-2 rounded-lg text-white font-medium mt-3"
            >
              Save / Edit
            </button>
            <Toaster />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default EditNote;
