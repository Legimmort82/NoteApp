import image1w from "@/icons/w1.svg";
import image2w from "@/icons/w2.svg";
import image3w from "@/icons/w3.svg";
import image4w from "@/icons/w4.svg";
import image5w from "@/icons/w5.svg";
import image6w from "@/icons/w6.svg";
import Image from "next/image";
import { darkModeNoteContext } from "@/context/DarkModeNoteContext"
import { useContext } from "react";
import Link from "next/link";
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import homeImg from "@/assets/icons/home.svg"

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
            <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image1w} alt="" />
          </Tippy>
        </Link>

        <Link href={"/note/addnotes"}>
          <Tippy content="Add Note" placement="right" delay={200}>
            <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image2w} alt="" />
          </Tippy>
        </Link>

        {/* <Link href={"/note/folders"}>
          <Tippy content="Folders" placement="right" delay={200}>
            <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image3w} alt=""/>
          </Tippy>
        </Link> */}

        <Link href={"/note/trashes"}>
          <Tippy content="Trash" placement="right" delay={200}>
            <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image4w} alt="" />
          </Tippy>
        </Link>

        <Link href={"/note/favorites"}>
          <Tippy content="Favorite" placement="right" delay={200}>
            <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image5w} alt="" />
          </Tippy>
        </Link>

        <Tippy content="Dark | Light" placement="right" delay={200}>
          <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image6w} onClick={() => { setDark(!dark) }} alt="" />
        </Tippy>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
