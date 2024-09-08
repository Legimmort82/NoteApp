import image1r from "@/icons/r1.svg";
import image2r from "@/icons/r2.svg";
import image3r from "@/icons/r3.svg";
import image4r from "@/icons/r4.svg";
import image5r from "@/icons/r5.svg";
import image6r from "@/icons/r6.svg";
import dartimg from "@/icons/Dart.svg";
import star from "@/icons/Stars.svg";
import dividertop from "@/icons/Divider-top.svg";
import dividerdown from "@/icons/Divider-down.svg";
import Image from "next/image";
import HomePageCard from "@/components/HomePageCard";
import Layout from "@/components/Layout";


export default function Home() {

  return (
    <Layout>
      <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-clip">
        <div className="bg-Primary-500 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 "></div>

        <div className="pl-[20px] pr-[20px] flex flex-col items-center">
          <h1 className="text-[80px] font-bold mb-3 dark:text-white">Welcome to Note Smart</h1>

          <div>
            <div className="flex justify-between items-center">
              <HomePageCard
                img={image1r}
                text="Click on the notes icon to see all of your created notes"
              />
              <Image className="w-[90px] h-[90px]" src={dartimg} />
              <HomePageCard
                img={image2r}
                text="Click on the new note icon to create a new one and mange it"
              />
            </div>
            <Image src={dividertop} />
            <div className="flex justify-between items-center mb-[28px]">
              <HomePageCard
                img={image3r}
                text="Click on the folder icon to see notes by categories that you made"
              />
              <Image className="w-[90px] h-[90px]" src={star} />
              <HomePageCard
                img={image4r}
                text="Click on the recycle bin icon to restore notes you were removed before"
              />
            </div>

            <Image src={dividerdown} />

            <div className="flex justify-between items-center">
              <HomePageCard
                img={image5r}
                text="Click on the favorite icon to see your favorites ones in the app"
              />
              <Image className="w-[90px] h-[90px]" src={dartimg} />
              <HomePageCard
                img={image6r}
                text="Toggle dark mode or light mode as you like"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
