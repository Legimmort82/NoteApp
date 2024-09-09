import Image from "next/image";
import { useState } from "react";

function NoteCard({ folderName, description, date, img1, img2, img3 }) {
  return (
    <div className="bg-Primary-200 flex flex-col justify-between w-[30%] rounded-md px-4 py-3 border-l-8 border-Primary-400">
      <div className="flex justify-between items-center mb-5">
        <p className="text-[30px] font-semibold">{folderName}</p>
        <p className="text-[18px] font-semibold">{date}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-[18px]">{description}</p>
        <div className="flex">
          <Image className="w-[25px] ml-2 cursor-pointer" src={img1} alt="" />
          <Image className="w-[25px] ml-2 cursor-pointer" src={img2} alt="" />
          <Image className="w-[25px] ml-2 cursor-pointer" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
