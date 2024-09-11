import darkchangeimg from "@/assets/icons/dark-change.svg";
import { darkModeNoteContext } from "@/context/DarkModeNoteContext";
import { auth } from "@/context/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { PropagateLoader } from "react-spinners";

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { dark, setDark } = useContext(darkModeNoteContext);
  const [Loading, setLoading] = useState(false);
  const OnSubmit = (data) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, data?.email, data?.password)
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
    <div className={`${dark && "dark"}`}>
      <div
        className={`  flex flex-col items-center bg-Primary-100 dark:bg-dark-300 h-screen relative `}
      >
        <div
          className="absolute top-[50px] right-[130px]"
          onClick={() => {
            setDark(!dark);
          }}
        >
          <Image
            className="w-[ 60px] h-[60px] cursor-pointer"
            src={darkchangeimg}
            alt="logo"
          />
        </div>

        <div className="mb-12">
          <h1 className="text-Primary-500 text-[90px] font-bold">Note Smart</h1>
        </div>

        <div className="flex justify-evenly">
          <div className="mr-12 w-[30%] mt-[70px]">
            <form
              className="flex flex-col items-center "
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
                className="bg-Primary-500 text-white py-3 px-[110px] rounded-md mb-3"
                type="submit"
              >
                {Loading ? <PropagateLoader color="#FFF" size={7}/> : "Login"}
              </button>

              <Link
                className="text-primary font-bold text-[16px] text-Primary-500"
                href="register"
              >
                Dont have an account?
              </Link>
            </form>
          </div>

          <div className="flex flex-col items-center w-[30%]">
            <h2 className="text-gray-950 mb-[20px] dark:text-white text-[60px] text-center font-bold">
              Log In To Your Account
            </h2>
        
            <p className="text-gray-700 text-center dark:text-white text-[25px] leading-[50px]">
              Login to NoteSmart for free Create and manage unlimited notes
              enjoy the friendly and easy to use enviroment with various
              features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
