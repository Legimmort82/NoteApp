import image1w from "@/icons/w1.svg";
import image2w from "@/icons/w2.svg";
import image3w from "@/icons/w3.svg";
import image4w from "@/icons/w4.svg";
import image5w from "@/icons/w5.svg";
import image6w from "@/icons/w6.svg";
import image7w from "@/icons/w7.svg";
import Image from "next/image";
import { darkModeNoteContext } from "@/context/DarkModeNoteContext";
import { useContext } from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  const { dark, setDark } = useContext(darkModeNoteContext);
 
  return (
    <div className={`flex ${dark && "dark"}`}>
      <div className="bg-Primary-700 dark:bg-[#0C071C] min-w-[90px] h-screen flex flex-col justify-around items-center sticky left-0 top-0">
        <Link href={"/note/allnotes"}>
          <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image1w} alt=""/>
        </Link>

        <Link href={"/note/addnotes"}>
          <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image2w} alt=""/>
        </Link>

        <Link href={"/note/folders"}>
          <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image3w} alt=""/>
        </Link>

        <Link href={"/note/trashes"}>
          <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image4w} alt=""/>
        </Link>

        <Link href={"/note/favorites"}>
          <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image5w} alt=""/>
        </Link>

        <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image6w} onClick={()=>{setDark(!dark)}} alt=""/>
        <Image className="w-[40px] h-[40px] cursor-pointer duration-[230ms] hover:scale-[1.30]" src={image7w} alt=""/>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
