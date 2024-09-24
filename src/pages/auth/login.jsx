import darkModeImg from "@/assets/icons/dark-mode-img.svg";
import Image from "next/image";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import Form from "@/components/ui/Form";
import { darkModeContext } from "@/context/DarkModeContext";
import { auth } from "@/context/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { SecondaryInputField } from "@/components/ui/Fields/fields";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/LoginSchema";
import "tippy.js/dist/tippy.css";

export default function Login() {

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
  const { dark, setDark } = useContext(darkModeContext);
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
        className={` flex flex-col items-center bg-Primary-100 dark:bg-dark-300 overflow-auto h-screen relative `}
      >
        <div
          className="absolute lg:top-[50px] lg:right-[130px] top-[160px]"
          onClick={() => {
            setDark(!dark);
          }}
        >
          <Tippy content="Dark | Light" placement="bottom" delay={200}>
            <Image
              className="w-[ 60px] h-[60px] cursor-pointer duration-[230ms] hover:scale-[1.12]"
              src={darkModeImg}
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
            <Form
              className="flex flex-col items-center justify-center "
              onSubmit={OnSubmit}
              methods={methods}
            >
              <label className="text-gray-800 dark:text-white text-[15px] mb-4 font-semibold">
                Email Address
              </label>
              <div className="mb-8 w-full">
                <SecondaryInputField name="email" />
              </div>

              <label className="text-gray-800 dark:text-white text-[15px] mb-4 font-semibold">
                Password
              </label>
              <div className="mb-8 w-full">
                <SecondaryInputField name="password" />
              </div>

              <button
                className="bg-Primary-500 text-white py-3 px-[110px] rounded-md mb-3"
                type="submit"
              >
                {Loading ? (
                  <BeatLoader color="#FFF" size={12} className="px-6" />
                ) : (
                  "Login"
                )}
              </button>

              <Link
                className="font-bold text-[16px] text-Primary-500"
                href="register"
              >
                Dont have an account?
              </Link>
            </Form>
          </div>

          <div className="md:flex md:flex-col md:items-center md:justify-center md:w-[30%] hidden ">
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
