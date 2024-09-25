import { useState } from "react";
import { colors } from "./colors";

function ColorPicker({ setColor, className }) {
  const [colorId, setColorId] = useState(1);
  // const sizes = {
  //   sm: "w-6 h-6",
  //   md: "w-12 h-12",
  // };
  const handleColor = (id, color) => {
    setColorId(id);
    setColor(color);
  };
  return (
    <>
      <div className="flex flex-col items-center lg:w-[35%] mb-14 lg:mb-0">
        <p className="font-semibold text-[26px] mb-9 dark:text-white">
          Pick a color :
        </p>

        <div className={`flex flex-wrap gap-6`}>
          {colors.map((color) => {
            return (
              <div
                key={color.id}
                onClick={() => handleColor(color.id, color.color)}
                className={`rounded-full cursor-pointer duration-300 hover:scale-[1.2] ${
                  color.id == colorId
                    ? `bg-Primary-100 border-gray-400 border-4`
                    : ""
                } ${className}`}
                style={{ background: `${color.color}` }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
