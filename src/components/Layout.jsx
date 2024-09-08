import image1w from "@/icons/w1.svg";
import image2w from "@/icons/w2.svg";
import image3w from "@/icons/w3.svg";
import image4w from "@/icons/w4.svg";
import image5w from "@/icons/w5.svg";
import image6w from "@/icons/w6.svg";
import image7w from "@/icons/w7.svg";
import Image from "next/image";
import { darkModeContext } from "@/context/DarkModeContext";
import { useContext } from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  const { dark, setDark } = useContext(darkModeContext);
 
  return (
    <div className={`flex ${dark && "dark"}`}>
      <div className="bg-Primary-700 dark:bg-dark-500 w-[90px] h-screen flex flex-col justify-around items-center sticky">
        <Link href={"/note/allnotes"}>
          <Image className="w-[40px] h-[40px] cursor-pointer" src={image1w} />
        </Link>

        <Link href={"/note/addnotes"}>
          <Image className="w-[40px] h-[40px] cursor-pointer" src={image2w} />
        </Link>

        <Link href={"/note/folders"}>
          <Image className="w-[40px] h-[40px] cursor-pointer" src={image3w} />
        </Link>

        <Link href={"/note/trashes"}>
          <Image className="w-[40px] h-[40px] cursor-pointer" src={image4w} />
        </Link>

        <Link href={"/note/favorites"}>
          <Image className="w-[40px] h-[40px] cursor-pointer" src={image5w} />
        </Link>

        <Image className="w-[40px] h-[40px] cursor-pointer" src={image6w} onClick={()=>{setDark(!dark)}}/>
        <Image className="w-[40px] h-[40px] cursor-pointer" src={image7w} />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
