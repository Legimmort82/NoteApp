import Image from "next/image"

function FolderCard({folderName, img}) {
  return (
    <div className="bg-Primary-600 flex justify-between items-center w-[30%] rounded-md px-10 py-3 mb-4 border-2 border-Primary-400">
        <p className="text-[30px] text-white font-semibold">{folderName}</p>
        <Image className="w-6 h-6 cursor-pointer" src={img} alt=""/>
    </div>
  )
}

export default FolderCard