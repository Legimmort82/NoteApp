import noteDate from "@/assets/icons/note-card-icons/note-date.svg";
import Layout from "@/components/Layouts/Layout";
import Image from "next/image";
import Form from "@/components/ui/Form";
import Button from "@/components/ui/Button/index.jsx";
import useAddNote from "@/api/Notes/addNote";
import useGetAllNotes from "@/api/Notes/getAllNotes";
import CustomToast from "@/components/ui/Toast/CustomToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  PrimaryInputField,
  PrimaryTextareaField,
} from "@/components/ui/Fields/fields";
import { AddNoteSchema } from "@/schemas/AddNoteSchema";
import ColorPicker from "@/components/ui/Color/ColorPicker";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

function AddNotes() {
  const [color, setColor] = useState("#EA1616");
  const { mutate } = useAddNote();
  const { data } = useGetAllNotes();
  const router = useRouter();
  const methods = useForm({
    defaultValues: {
      title: "",
      tag: "",
      desc: "",
    },
    resolver: zodResolver(AddNoteSchema),
  });
  
  const date =
    new Date().getFullYear() +
    "/" +
    String(new Date().getMonth() + 1).padStart(2, "0") +
    "/" +
    String(new Date().getDate()).padStart(2, "0");

  const numberOfObjects = data?.data.length;

  const handleSubmit = (addData) => {
    const note = {
      id: String(numberOfObjects + 1),
      title: addData?.title,
      date: date,
      description: addData?.desc,
      color: color,
      tag: addData?.tag,
      isFavorite: false,
      isTrash: false,
    };
    mutate(note, {
      onSuccess: (res) => {
        console.log(res);
        toast.custom(
          () => <CustomToast text="Note Added successfully" color="green" />,
          { duration: 1500, position: "top-center" }
        );
        router.push("allnotes");
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <>
      <Layout>
        <Form
          methods={methods}
          onSubmit={handleSubmit}
          className="bg-Primary-100 dark:bg-dark-300 h-calc60 lg:h-screen relative overflow-x-clip overflow-y-auto duration-1000"
        >
          <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 dark:shadow-none" />

          <div className="lg:pl-36 lg:pr-40 pl-20 pr-20 py-7">
            <div className="mb-20 lg:mb-14">
              <PrimaryInputField name="title" placeholder="Title" />
              <div className=" flex justify-center md:justify-end items-center mt-6">
                <div className="flex items-center">
                  <p className="font-medium text-[18px] dark:text-white">
                    Color :
                  </p>
                  <div
                    className="w-8 h-8 rounded-[50%] ml-2 lg:ml-3"
                    style={{ backgroundColor: color }}
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
              
              <ColorPicker setColor={setColor} className={"w-[52px] h-[52px]"}/>
              
              <div className="flex flex-col w-[80%] lg:w-[50%]">
                <p className="text-[26px] font-semibold dark:text-white">
                  Write your tag :
                </p>

                <div className="mt-8">
                  <PrimaryInputField name="tag" placeholder="Tag Name" />
                </div>
              </div>
            </div>
            <PrimaryTextareaField
              name="desc"
              placeholder="Write Your Content ... "
            />
            <div className="w-40">
              <Button
                onClick={() => handleSubmit}
                disabled={methods.formState.isLoading}
              >
                {" "}
                save / edit
              </Button>
            </div>
          </div>
          <Toaster />
        </Form>
      </Layout>
    </>
  );
}

export default AddNotes;
