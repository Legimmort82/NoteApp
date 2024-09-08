import Layout from "@/components/Layout";
import trashimg from "@/assets/icons/trash.svg"
import favoriteimg from "@/assets/icons/favorite.svg"
import viewimg from "@/assets/icons/view.svg"
import NoteCard from "@/components/NoteCard";

function favorites() {
  return (
    <>
    <Layout>
    <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-clip">
        <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 "></div>

        <div className="px-24">
          <h1 className="py-7  text-Primary-500 text-[55px] font-bold">Favorites</h1>

          <div className="flex justify-between">
            <NoteCard 
              folderName={"Folder Name"}
              date={"2024/04/03"}
              img1={viewimg}
              img2={favoriteimg}
              img3={trashimg}
            />

            <NoteCard 
              folderName={"Folder Name"}
              date={"2024/04/03"}
              img1={viewimg}
              img2={favoriteimg}
              img3={trashimg}
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

export default favorites