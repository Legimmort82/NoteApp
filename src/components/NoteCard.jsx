import Image from "next/image";
import Link from "next/link";

function NoteCard({ title, description, date, img1, img2, img3 ,color,id}) { //TODO: add folderName

  return (
    <div className={`flex bg-white flex-col justify-between w-[30%] rounded-md px-4 py-3`} style={{borderLeft:`8px solid ${color}`,borderColor: color}}>
      <div className="flex justify-between items-center mb-5">
        <p className="text-[30px] font-semibold">{title}</p>
        <p className="text-[18px] font-semibold">{date}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-[18px]">{description}</p>
        <div className="flex">
          <Link href={`/note/Edit/${id}`}>
            <Image className="w-[25px] ml-2 cursor-pointer" src={img1} alt="" />
          </Link>

          <Image className="w-[25px] ml-2 cursor-pointer" src={img2} alt="" />
          <Image className="w-[25px] ml-2 cursor-pointer" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
