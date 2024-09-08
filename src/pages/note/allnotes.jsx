import Layout from "@/components/Layout";
import trashimg from "@/assets/icons/trash.svg"
import notfavoriteimg from "@/assets/icons/not-favorite.svg"
import viewimg from "@/assets/icons/view.svg"
import NoteCard from "@/components/NoteCard";

function allnotes() {
  return (
    <>
    <Layout>
    <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-clip">
        <div className="bg-Primary-500 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 "></div>

        <div className="px-24">
          <h1 className="py-7  text-Primary-500 text-[55px] font-bold">Allnotes</h1>

          <div className="flex justify-between">
            <NoteCard 
              folderName={"Folder Name"}
              date={"2024/04/03"}
              img1={viewimg}
              img2={notfavoriteimg}
              img3={trashimg}
            />

            <NoteCard 
              folderName={"Folder Name"}
              date={"2024/04/03"}
              img1={viewimg}
              img2={notfavoriteimg}
              img3={trashimg}
            />

            <NoteCard 
              folderName={"Folder Name"}
              date={"2024/04/03"}
              img1={viewimg}
              img2={notfavoriteimg}
              img3={trashimg}
            />
          </div>
        </div>  
    </div>
    </Layout>
    </>
  )
}

export default allnotes