import allNoteImg from "@/assets/icons/sidebar-icons/all-note-img.svg";
import addNoteImg from "@/assets/icons/sidebar-icons/add-note-img.svg";
import trashImg from "@/assets/icons/sidebar-icons/trash-img.svg";
import favoriteImg from "@/assets/icons/sidebar-icons/favorite-img.svg";
import darkModeImg from "@/assets/icons/sidebar-icons/dark-mode-img.svg";
import homeImg from "@/assets/icons/sidebar-icons/home-img.svg";
import Image from "next/image";
import { darkModeContext } from "@/context/DarkModeContext";
import { useContext } from "react";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Layout = ({ children }) => {
  const { dark, setDark } = useContext(darkModeContext);

  return (
    <div className="lg:flex-row flex flex-col-reverse">
      <div className="bg-Primary-700 z-10 dark:bg-[#0C071C] duration-1000 min-h-[60px] lg:h-screen justify-between items-center px-4  flex lg:flex-col lg:justify-around lg:top-0 sticky bottom-0 right-0 left-0">
        <Link href={"/"}>
          <Tippy content="Home" placement="top" delay={200}>
            <Image
              className="w-[21px] h-[21px] lg:w-[29px] lg:h-[29px] cursor-pointer duration-[230ms] hover:scale-[1.30]"
              src={homeImg}
              alt="icon"
            />
          </Tippy>
        </Link>

        <Link href={"/note/allnotes"}>
          <Tippy content="All Notes" placement="top" delay={200}>
            <Image
              className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] cursor-pointer duration-[230ms] hover:scale-[1.30]"
              src={allNoteImg}
              alt="icon"
            />
          </Tippy>
        </Link>

        <Link href={"/note/addnotes"}>
          <Tippy content="Add Note" placement="top" delay={200}>
            <Image
              className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] cursor-pointer duration-[230ms] hover:scale-[1.30]"
              src={addNoteImg}
              alt="icon"
            />
          </Tippy>
        </Link>

        <Link href={"/note/trashes"}>
          <Tippy content="Trash" placement="top" delay={200}>
            <Image
              className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] cursor-pointer duration-[230ms] hover:scale-[1.30]"
              src={trashImg}
              alt="icon"
            />
          </Tippy>
        </Link>

        <Link href={"/note/favorites"}>
          <Tippy content="Favorite" placement="top" delay={200}>
            <Image
              className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] cursor-pointer duration-[230ms] hover:scale-[1.30]"
              src={favoriteImg}
              alt="icon"
            />
          </Tippy>
        </Link>

        <Tippy content="Dark | Light" placement="top" delay={200}>
          <Image
            className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] cursor-pointer duration-[230ms] hover:scale-[1.30]"
            src={darkModeImg}
            onClick={() => {
              setDark(!dark);
            }}
            alt="icon"
          />
        </Tippy>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
