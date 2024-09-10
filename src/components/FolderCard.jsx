import Image from "next/image";
import { useState } from "react";

function FolderCard({ folderName, img }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-Primary-600 flex justify-between items-center w-[30%] rounded-md px-7 py-3 mb-4 border-2 border-Primary-400">
      <p className="text-[20px] text-white font-bold">{folderName}</p>
      <Image
        className={`w-5 h-5 cursor-pointer transition-all duration-300 ease-in-out ${
          open ? "rotate-180" : ""
        }`}
        src={img}
        alt=""
        onClick={() => setOpen(!open)}
      />
    </div>
  );
}

export default FolderCard;