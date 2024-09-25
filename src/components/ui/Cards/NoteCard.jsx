import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

function NoteCard({
  title,
  description,
  date,
  img1,
  img2,
  img3,
  color,
  id,
  onClick1,
  onClick2,
}) {
  return (
    <div
      className={
        "flex bg-white flex-col justify-between md:w-[30%] w-full min-w-[350px] rounded-md px-4 py-3 shadow-sm hover:shadow-lg duration-200 hover:scale-[1.01] dark:shadow-gray-600"
      }
      style={{ borderLeft: `8px solid ${color}`, borderColor: color }}
    >
      <div className="flex justify-between items-center mb-5">
        <p className="text-[25px] font-semibold">{title}</p>
        <p className="text-[18px] font-semibold">{date}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-[18px]">{description}</p>
        <div className="flex">
          <Link href={`/note/Edit/${id}`}>
            <Image
              className="w-[25px] h-[25px] mr-2 cursor-pointer"
              src={img1}
              alt="image"
            />
          </Link>

          <Image
            onClick={onClick1}
            className="w-[25px] h-[25px] ml-2 cursor-pointer duration-500 hover:rotate-[360deg]"
            src={img2}
            alt="image"
          />

          <Image
            onClick={onClick2}
            className="w-[25px] h-[25px] ml-2 cursor-pointer"
            src={img3}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  color: PropTypes.string,
  onClick1: PropTypes.func,
  onClick2: PropTypes.func,
  img1: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  img2: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  img3: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
export default NoteCard;
