import darkchangeimg from "@/assets/icons/dark-change.svg";
import { darkModeNoteContext } from "@/context/DarkModeNoteContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/context/Firebase";
export default function Register() {
  const { dark, setDark } = useContext(darkModeNoteContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(data);
        // Signed up
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  };
  return (
    <>
      <div className={`${dark && "dark"}`}>
        <div className="flex flex-col bg-Primary-100 items-center dark:bg-dark-300 h-screen">
          <div className="mb-12">
            <h1 className="text-Primary-500 text-[90px] font-bold">
              Note Smart
            </h1>
          </div>

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

          <div className="flex justify-evenly">
            <div className="mr-12 w-[30%]">
              <form
                className="flex flex-col items-center"
                onSubmit={handleSubmit}
              >
                <label className="text-gray-800 dark:text-white text-[15px] mb-4 font-semibold">
                  Email Address
                </label>
                <input
                  className="rounded-md h-12 mb-8 w-[100%]"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className="text-gray-800 dark:text-white text-[15px] mb-4 font-semibold">
                  Password
                </label>
                <input
                  className="rounded-md h-12 mb-8 w-[100%]"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* <label className="text-gray-800 dark:text-white text-[15px] mb-4 font-semibold">
                  Confirm Password
                </label>
                <input className="rounded-md h-12 mb-8 w-[100%]" type="text" /> */}

                <button
                  className=" text-white py-3 px-[90px] bg-Primary-500 rounded-md mb-3"
                  type="submit"
                >
                  Create Account
                </button>

                <Link
                  className="text-Primary-500 font-bold text-[16px]"
                  href="login"
                >
                  Already have an account?
                </Link>
              </form>
            </div>

            <div className="flex flex-col items-center w-[30%]">
              <h2 className="text-gray-950 dark:text-white mb-[20px] text-[60px] text-center font-bold">
                Create a free account
              </h2>
              <p className="text-gray-700 dark:text-white text-center text-[25px]">
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
