import noteDate from "@/assets/icons/note-card-icons/note-date.svg";
import Layout from "@/components/Layouts/Layout";
import Image from "next/image";
import Form from "@/components/ui/Form";
import Button from "@/components/ui/Button/index.jsx";
import useAddNote from "@/api/Notes/addNote";
import useGetAllNotes from "@/api/Notes/getAllNotes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CirclePicker } from "react-color";
import { useForm } from "react-hook-form";
import {
  PrimaryInputField,
  PrimaryTextareaField,
} from "@/components/ui/Fields/fields";
import { AddNoteSchema } from "@/schemas/AddNoteSchema";

function AddNotes() {
  const [selectColor, setSelectColor] = useState("#F44336");
  const { mutate } = useAddNote();
  const { data } = useGetAllNotes();
  const numberOfObjects = data?.data.length;
  const methods = useForm({
    defaultValues: {
      title: "",
      tag: "",
      desc: "",
    },
    resolver: zodResolver(AddNoteSchema),
  });
  const handleSubmit = (addData) => {
    const note = {
      id: String(numberOfObjects + 1),
      title: addData?.title,
      date:
        new Date().getFullYear() +
        "/" +
        String(new Date().getMonth() + 1).padStart(2, "0") +
        "/" +
        String(new Date().getDate()).padStart(2, "0"),
      description: addData?.desc,
      color: selectColor,
      tag: addData?.tag,
      isFavorite: false,
      isTrash: false,
    };
    mutate(note, {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const date =
    new Date().getFullYear() +
    "/" +
    String(new Date().getMonth() + 1).padStart(2, "0") +
    "/" +
    String(new Date().getDate()).padStart(2, "0");

  return (
    <>
      <Layout>
        <Form
          methods={methods}
          onSubmit={handleSubmit}
          className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-x-clip overflow-y-auto duration-1000"
        >
          <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 dark:shadow-none" />

          <div className="lg:pl-36 lg:pr-40 pl-20 pr-20 py-7">
            <div className="mb-20 lg:mb-14">
              {/* <input
                type="text"
                onChange={handelTitle}
                value={title}
                placeholder="Type your title here..."
                className="bg-Primary-100 px-2 outline-none w-full border-b-[5px] h-11 border-b-Primary-600 placeholder:text-[30px] pb-3 text-[30px] font-semibold dark:bg-dark-300 dark:text-white"
              /> */}
              <PrimaryInputField name="title" placeholder="Title" />
              <div className=" flex justify-center md:justify-end items-center mt-6">
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
                    {date}
                  </p>
                  <Image src={noteDate} alt="" />
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
                  circleSize={50}
                  width="100%"
                  onChangeComplete={(color) => setSelectColor(color.hex)}
                />
              </div>

              <div className="flex flex-col w-[80%] lg:w-[50%]">
                <p className="text-[26px] font-semibold dark:text-white">
                  Write your tag :
                </p>

                <div className="mt-8">
                  {/* <input
                    type="text"
                    value={tag}
                    onChange={handelTag}
                    placeholder="Work"
                    className="bg-Primary-100 outline-none px-2 w-full border-b-[5px] h-11 border-b-Primary-600 text-[26px] font-medium text-gray-500 placeholder:text-[30px] dark:bg-dark-300 dark:text-gray-300"
                  /> */}
                  <PrimaryInputField name="tag" placeholder="Tag Name" />
                </div>
              </div>
            </div>

            {/* <textarea
              value={desc}
              onChange={handelDesc}
              className="bg-Primary-100 resize-none text-[24px] rounded-lg border-[3px] w-[100%] h-[500px] lg:h-[400px] border-Primary-500 border-solid placeholder:text-gray-400  placeholder:font-medium p-4 dark:bg-dark-300 dark:text-white "
              type="text"
              placeholder="Type your content here ..."
            /> */}
            <PrimaryTextareaField
              name="desc"
              placeholder="Write Your Content ... "
            />

            <div className="w-40">
              <Button onClick={() => handleSubmit} disabled={methods.formState.isValid}> save / edit</Button>
            </div>

            {/* <button
              // onClick={handleSubmit}
              type="submit"
              className="bg-Primary-800 px-8 py-2 rounded-lg text-white font-medium mt-3 duration-300 hover:scale-105"
            >
              Save / Edit
            </button> */}
          </div>
        </Form>
      </Layout>
    </>
  );
}

export default AddNotes;
