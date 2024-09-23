import allNoteImg from "@/assets/icons/home-page-icons/all-note-Img.svg";
import addNoteImg from "@/assets/icons/home-page-icons/add-note-Img.svg";
import trashImg from "@/assets/icons/home-page-icons/trash-img.svg";
import favoriteImg from "@/assets/icons/home-page-icons/favorite-img.svg";
import darkModeImg from "@/assets/icons/home-page-icons/dark-mode-img.svg";
import dartimg from "@/assets/icons/home-page-icons/Dart.svg";
import dividertop from "@/assets/icons/home-page-icons/Divider-top.svg";
import dividerdown from "@/assets/icons/home-page-icons/Divider-down.svg";
import Image from "next/image";
import HomePageCard from "@/components/HomePageCard";
import Layout from "@/components/Layouts/Layout";

export default function Home() {

  return (
    <Layout>
      <div className="bg-Primary-100 dark:bg-dark-300 h-screen  relative overflow-y-auto overflow-x-clip flex-col items-center justify-between">
        <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 "></div>
          <h1 className="lg:text-[80px] text-[40px] font-bold mb-8 dark:text-white text-center">Welcome to Note Smart</h1>

        <div className="pl-[20px] pr-[20px] flex flex-col items-center justify-center">

          <div className="flex flex-col justify-center px-4 lg:px-0">
            <div className="lg:flex-row gap-3 flex flex-col lg:justify-between items-center">
              <HomePageCard
                img={allNoteImg}
                link={"/note/allnotes"}
                text="Click on the notes icon to see all of your created notes"
              />
              <Image className="w-[90px] h-[90px] lg:block hidden" src={dartimg} />
              <HomePageCard
                img={addNoteImg}
                link={"/note/addnotes"}
                text="Click on the new note icon to create a new one and mange it"
              />
            </div>
            <Image src={dividertop} className="lg:block hidden" />
            <div className="lg:flex-row gap-3 flex flex-col lg:justify-center mt-3 items-center mb-3 lg:mb-[28px]">
              <HomePageCard
                img={favoriteImg}
                link={"/note/favorites"}
                text="Click on the favorite icon to see your favorites ones in the app"
              />
            </div>

            <Image src={dividerdown} className="lg:block hidden"/>

            <div className="lg:flex-row gap-3 flex flex-col lg:justify-between  items-center mb-6">
                <HomePageCard
                  img={trashImg}
                  link={"/note/trashes"}
                  text="Click on the recycle bin icon to restore notes you were removed before"
                />
              
              <Image className="w-[90px] h-[90px] lg:block hidden " src={dartimg} />

              <HomePageCard
                img={darkModeImg}
                text="Toggle dark mode or light mode as you like"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
