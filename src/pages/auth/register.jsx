import darkModeImg from "@/assets/icons/dark-mode-img.svg";
import Image from "next/image";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import Form from "@/components/ui/Form";
import { darkModeContext } from "@/context/DarkModeContext";
import { useContext, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { SecondaryInputField } from "@/components/ui/Fields/fields";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas/RegisterSchema";
import "tippy.js/dist/tippy.css";

export default function Register() {

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(RegisterSchema),
  });
  const { dark, setDark } = useContext(darkModeContext);
  const [Loading, setLoading] = useState(false);

  const OnSubmit = (data) => {
    // setLoading(true);
    // createUserWithEmailAndPassword(auth, data?.email, data?.password)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };
  return (
    <>
      <div className={`${dark && "dark"}`}>
        <div className="flex flex-col bg-Primary-100 items-center relative dark:bg-dark-300 h-screen overflow-auto">
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
                methods={methods}
                className="flex flex-col items-center justify-center"
                onSubmit={OnSubmit}
              >
                <label className="text-gray-800 dark:text-white text-[15px] mb-4 font-semibold">
                  Email Address
                </label>
                <div className="mb-8 w-full">
                  <SecondaryInputField name="email" type={"email"}/>
                </div>

                <label className="text-gray-800 dark:text-white text-[15px] mb-4 font-semibold">
                  Password
                </label>
                <div className="mb-8 w-full">
                  <SecondaryInputField 
                    isEye={true}
                    name="password" 
                    type={"password"}/>
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
              </Form>
            </div>

            <div className="md:flex md:flex-col md:items-center md:justify-center md:w-[30%] hidden ">
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
