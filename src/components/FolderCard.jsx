import Image from "next/image";
import { useState } from "react";

function FolderCard({ folderName, img }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-Primary-600 flex justify-between items-center w-[30%] rounded-md px-10 py-3 mb-4 border-2 border-Primary-400">
      <p className="text-[30px] text-white font-semibold">{folderName}</p>
      <Image
        className={`w-6 h-6 cursor-pointer transition-all duration-300 ease-in-out ${
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
