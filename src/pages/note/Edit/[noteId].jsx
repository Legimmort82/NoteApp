import noteDate from "@/assets/icons/note-card-icons/note-date.svg";
import Layout from "@/components/Layouts/Layout";
import Image from "next/image";
import Button from "@/components/ui/Button/index.jsx";
import Form from "@/components/ui/Form";
import useUpdateNote from "@/api/Notes/updateNote";
import useGetAllNotes from "@/api/Notes/getAllNotes";
import Loading from "@/components/ui/Loading/Loading";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { CirclePicker } from "react-color";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import {
  PrimaryInputField,
  PrimaryTextareaField,
} from "@/components/ui/Fields/fields";
import { EditNoteSchema } from "@/schemas/EditNoteSchema";
import Error from "@/components/ui/Error/Error";
import CustomToast from "@/components/ui/Toast/CustomToast";

const EditNote = () => {
  const params = useParams();
  const [selectColor, setSelectColor] = useState("#F44336");
  const { isLoading, data, isError, error } = useGetAllNotes();
  const mutation = useUpdateNote();
  const findNote = data?.data.find((note) => note.id == params?.noteId);
  const methods = useForm({
    defaultValues: {
      title: "",
      tag: "",
      desc: "",
    },
    resolver: zodResolver(EditNoteSchema),
  });

  useEffect(() => {
    if (findNote) {
      methods.reset({
        title: findNote.title,
        tag: findNote.tag,
        desc: findNote.description,
      });
      setSelectColor(findNote?.color)
    }
  }, [findNote, methods.reset]);

  const handleSubmit = (data) => {
    const note = {
      ...findNote,
      title: data?.title,
      description: data?.desc,
      color: selectColor,
      tag: data?.tag,
    };
    mutation.mutate(
      { data: note, id: params.noteId },
      {
        onSuccess: (res) => {
          console.log(res);
          toast.custom(
            () => <CustomToast text="Note Edited successfully" color="green" />,
            { duration: 1500, position: "top-center" }
          );
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error>{error.message}</Error>;
  }

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
              <PrimaryInputField name="title" placeholder="Title" />
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
            <Toaster />
          </div>
        </Form>
      </Layout>
    </>
  );
};
export default EditNote;
