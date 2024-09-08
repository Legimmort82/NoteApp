import Layout from "@/components/Layout"
import NoteCard from "@/components/NoteCard"
import refreshimg from "@/assets/icons/refresh.svg"
import viewimg from "@/assets/icons/view.svg"


function trashes() {
  return (
    <>
    <Layout>
    <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-clip">
        <div className="bg-Primary-500 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 "></div>

        <div className="px-24">
          <h1 className="py-7  text-Primary-500 text-[55px] font-bold">Trashes</h1>

          <div className="flex justify-between">
            <NoteCard 
              folderName={"Folder Name"}
              date={"2024/04/03"}
              img1={viewimg}
              img2={refreshimg}
            />

            <NoteCard 
              folderName={"Folder Name"}
              date={"2024/04/03"}
              img1={viewimg}
              img2={refreshimg}
            />

            <NoteCard 
              folderName={"Folder Name"}
              date={"2024/04/03"}
              img1={viewimg}
              img2={refreshimg}
            />
          </div>
        </div>  
    </div>    
    </Layout>
    </>
  )
}

export default trashes