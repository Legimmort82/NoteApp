import allNoteImg from "@/assets/icons/sidebar-icons/all-note-img.svg";
import addNoteImg from "@/assets/icons/sidebar-icons/add-note-img.svg";
import trashImg from "@/assets/icons/sidebar-icons/trash-img.svg";
import favoriteImg from "@/assets/icons/sidebar-icons/favorite-img.svg";
import darkModeImg from "@/assets/icons/sidebar-icons/dark-mode-img.svg";
import homeImg from "@/assets/icons/sidebar-icons/home-img.svg"
import Image from "next/image";
import { darkModeNoteContext } from "@/context/DarkModeNoteContext"
import { useContext } from "react";
import Link from "next/link";
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

const Layout = ({ children }) => {
  const { dark, setDark } = useContext(darkModeNoteContext);

  return (
    <div className={`lg:flex-row flex flex-col-reverse ${dark && "dark"}`}>
      <div className="bg-Primary-700 z-10 dark:bg-[#0C071C] min-w-[90px] min-h-[60px] lg:h-screen justify-between items-center px-2 flex lg:flex-col lg:justify-around lg:top-0 sticky bottom-0 right-0 left-0">
        <Link href={"/"}>
          <Tippy content="Home" placement="right" delay={200}>
            <Image className="w-[35px] h-[35px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={homeImg} alt="" />
          </Tippy>
        </Link>

        <Link href={"/note/allnotes"}>
          <Tippy content="All Notes" placement="right" delay={200}>
            <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={allNoteImg} alt="" />
          </Tippy>
        </Link>

        <Link href={"/note/addnotes"}>
          <Tippy content="Add Note" placement="right" delay={200}>
            <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={addNoteImg} alt="" />
          </Tippy>
        </Link>

        {/* <Link href={"/note/folders"}>
          <Tippy content="Folders" placement="right" delay={200}>
            <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image3w} alt=""/>
          </Tippy>
        </Link> */}

        <Link href={"/note/trashes"}>
          <Tippy content="Trash" placement="right" delay={200}>
            <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={trashImg} alt="" />
          </Tippy>
        </Link>

        <Link href={"/note/favorites"}>
          <Tippy content="Favorite" placement="right" delay={200}>
            <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={favoriteImg} alt="" />
          </Tippy>
        </Link>

        <Tippy content="Dark | Light" placement="right" delay={200}>
          <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={darkModeImg} onClick={() => { setDark(!dark) }} alt="" />
        </Tippy>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
