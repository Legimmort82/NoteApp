import noteDate from "@/assets/icons/note-card-icons/note-date.svg";
import Layout from "@/components/Layouts/Layout";
import Image from "next/image";
import Button from "@/components/ui/Button/index.jsx"
import Form from "@/components/ui/Form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { CirclePicker } from "react-color";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import {
  PrimaryInputField,
  PrimaryTextareaField,
} from "@/components/ui/Fields/fields";
import { z } from "zod";
import Form from "@/components/ui/Form";
import Button from "@/components/ui/Button/index.jsx"
import Loading from "@/components/ui/Loading/Loading";

const EditNote = () => {
  const params = useParams();

  const [selectColor, setSelectColor] = useState("#F44336");

  const EditNoteSchema = z.object({
    title: z.string().min(1, { message: "Enter a title please" }),
    tag: z.string(),
    desc: z.string().min(1, { message: "Enter at least one character" }),
  });

  const { isLoading, data, isError, error } = useQuery(
    "note-data",
    () => {
      return axios.get("http://localhost:4000/notes");
    },
    { refetchOnMount: true, refetchOnWindowFocus: true }
  );

  const findNote = data?.data.find((note) => note.id == params?.noteId);
  const methods = useForm({
    defaultValues: {
      title: "",
      tag: "",
      desc: "",
    },
    resolver:zodResolver(EditNoteSchema)
  });
  useEffect(() => {
    if (findNote) {
      methods.reset({
        title: findNote.title,
        tag: findNote.tag,
        desc: findNote.description,
      });
    }
  }, [findNote, methods.reset]);
  
  const updateNote = (note) => {
    return axios.put(`http://localhost:4000/notes/${params?.noteId}`, note);
  };
  const mutation = useMutation({
    mutationKey: ["update-note"],
    mutationFn: updateNote,
  });

  const handleSubmit = (data) => {
    const note = {
      ...findNote,
      title: data?.title,
      description: data?.desc,
      color: selectColor,
      tag: data?.tag,
    };
    mutation.mutate(note);
  };
  
  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <Layout>
        <Form
          methods={methods}
          onSubmit={handleSubmit}
          className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-x-clip overflow-y-auto"
        >
          <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 dark:shadow-none" />
          <div className="lg:pl-36 lg:pr-40 pl-20 pr-20 py-7">
            <div className="mb-20 lg:mb-14">
              <PrimaryInputField name="title" placeholder="Title"/>
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
                    {findNote?.date}
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
                  <PrimaryInputField name="tag" placeholder="Tag Name"/>
                </div>
              </div>
            </div>

            <PrimaryTextareaField name="desc" placeholder="Write Your Content ... "/>

            <div className="w-40">
              <Button onClick={() => handleSubmit}> save / edit</Button>
            </div>

            {/* <button
              type="submit"
              className="bg-Primary-800 px-8 py-2 rounded-lg text-white font-medium mt-3 duration-300 hover:scale-105"
            >
              Save / Edit
            </button> */}
            <Toaster />
          </div>
        </Form>
      </Layout>
    </>
  );
};
export default EditNote;
