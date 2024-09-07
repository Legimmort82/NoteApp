import Image from "next/image";
import image1w from "@/icons/w1.svg";
import image2w from "@/icons/w2.svg";
import image3w from "@/icons/w3.svg";
import image4w from "@/icons/w4.svg";
import image5w from "@/icons/w5.svg";
import image6w from "@/icons/w6.svg";
import image7w from "@/icons/w7.svg";
import { darkModeContext } from "@/context/DarkModeContext";
import { useContext } from "react";

const Layout = ({ children }) => {
  const { dark, setDark } = useContext(darkModeContext);
  console.log(dark);
  return (
    <div className={`flex ${dark && "dark"}`}>
      <div className="bg-Primary-500 dark:bg-dark-500 w-[100px] h-screen  flex flex-col justify-around items-center ">
        <Image className="w-[40px] h-[40px]" src={image1w} />
        <Image className="w-[40px] h-[40px]" src={image3w} />
        <Image className="w-[40px] h-[40px]" src={image2w} />
        <Image className="w-[40px] h-[40px]" src={image4w} />
        <Image className="w-[40px] h-[40px]" src={image5w} />
        <Image className="w-[40px] h-[40px]" src={image6w} onClick={()=>{setDark(!dark)}}/>
        <Image className="w-[40px] h-[40px]" src={image7w} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
