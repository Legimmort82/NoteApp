import darkchangeimg from "@/assets/icons/dark-change.svg";
import { darkModeNoteContext } from "@/context/DarkModeNoteContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/context/Firebase";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

export default function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { dark, setDark } = useContext(darkModeNoteContext);
  const [Loading, setLoading] = useState(false);

  const OnSubmit = (data) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, data?.email, data?.password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className={`${dark && "dark"}`}>
        <div className="flex flex-col bg-Primary-100 items-center relative dark:bg-dark-300 lg:h-screen md:h-full h-screen">
          <div
            className="absolute lg:top-[50px] lg:right-[130px] top-[160px]"
            onClick={() => {
              setDark(!dark);
            }}
          >
            <Tippy content="Dark | Light" placement="bottom" delay={200}>
              <Image
                className="w-[ 60px] h-[60px] cursor-pointer duration-[230ms] hover:scale-[1.12]"
                src={darkchangeimg}
                alt="logo"
              />
            </Tippy>
          </div>

          <div className="md:mb-28 mb-40">
            <h1 className="text-Primary-500 md:text-[90px] text-[70px] font-bold">
              Note Smart
            </h1>
          </div>

          <div className="md:flex md:justify-evenly justify-center">
            <div className="mr-12 md:w-[30%] w-full mt-[70px]">
              <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleSubmit(OnSubmit)}
              >
                <label className="text-gray-800 dark:text-white text-[15px] mb-4 font-semibold">
                  Email Address
                </label>
                <div className="mb-8 w-full">
                  <input
                    className="rounded-md h-12 w-[100%] px-4"
                    type="email"
                    name="email"
                    {...register("email", {
                      required: "Please enter a valid email address",
                    })}
                  />
                  <p className="text-red-500 mt-2 font-semibold text-sm">
                    {errors?.email?.message}
                  </p>
                </div>

                <label className="text-gray-800 dark:text-white text-[15px] mb-4 font-semibold">
                  Password
                </label>
                <div className="mb-8 w-full">
                  <input
                    className="rounded-md h-12  w-[100%] px-4"
                    type="text"
                    name="password"
                    {...register("password", {
                      required: "Enter your password",
                    })}
                  />
                  <p className="text-red-500 mt-2 font-semibold text-sm">
                    {errors?.password?.message}
                  </p>
                </div>
                <button
                  className=" text-white py-3 px-[90px] bg-Primary-500 rounded-md mb-3"
                  type="submit"
                >
                  {Loading ? (
                    <BeatLoader color="#FFF" size={12} className="px-6" />
                  ) : (
                    "Create Account"
                  )}
                </button>

                <Link
                  className="text-Primary-500 font-bold text-[16px]"
                  href="login"
                >
                  Already have an account?
                </Link>
              </form>
            </div>

            <div className="md:flex md:flex-col md:items-center md:justify-center md:w-[30%] hidden md:pb-[250px]">
              <h2 className="text-gray-950 dark:text-white mb-[20px] text-[60px] text-center font-bold">
                Create a free account
              </h2>
              <p className="text-gray-700 dark:text-white text-center text-[25px] leading-[50px]">
                Join NoteSmart for free Create and manage unlimited notes enjoy
                the friendly and easy to use enviroment with various features
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
