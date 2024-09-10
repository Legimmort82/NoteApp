import Layout from "@/components/Layout"
import NoteCard from "@/components/NoteCard"
import arrowimg from "@/assets/icons/arrow.svg"
import viewimg from "@/assets/icons/view.svg"
import favoriteimg from "@/assets/icons/favorite.svg"
import trashimg from "@/assets/icons/trash.svg"
import addFolder from "@/assets/icons/add-folder.svg"
import FolderCard from "@/components/FolderCard"
import plus from "@/assets/icons/plus.svg"
import Image from "next/image"


function folders() {
  return (
    <>
    <Layout>
    <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-clip">
        <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 dark:shadow-none"/>

        <div className="px-24">
          <div className="flex items-center">
            <h1 className="py-7 text-Primary-500 text-[55px] font-bold">Folders</h1>

            <div className="relative cursor-pointer bg-Primary-700 w-[50px] h-[50px] rounded-md ml-[65px] duration-200 hover:scale-110">
              <Image src={plus} alt="" className="absolute w-[25px] h-[25px] top-[25%] left-[25%]" />
            </div>
          </div>

          <div className="flex flex-wrap gap-x-10">
            <FolderCard
              folderName={"Folder Name"} 
              img={arrowimg} 
            />

            <FolderCard
              folderName={"Folder Name"} 
              img={arrowimg} 
            />

            <FolderCard
              folderName={"Folder Name"} 
              img={arrowimg} 
            />

            <NoteCard 
              folderName={"Folder Name"}
              date={"2024/04/03"}
              img1={viewimg}
              img2={favoriteimg}
              img3={trashimg}
            />
          </div>
        </div>  
    </div>    
    </Layout>
    </>
  )
}

export default folders