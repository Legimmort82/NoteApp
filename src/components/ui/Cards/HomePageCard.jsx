import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

function HomePageCard({ text, img, link = "" }) {
  return (
    <Link
      href={link}
      className="bg-Primary-300 dark:bg-dark-100 flex flex-col items-center justify-around w-[40%] rounded-md px-12 lg:pb-5 pb-10 min-w-full lg:min-w-10 min-h-[180px] duration-[350ms] shadow-md hover:shadow-xl hover:scale-[1.02] dark:shadow-gray-600"
    >
      <Image className="w-[60px] h-[60px] " src={img} alt="card" />
      <p className="text-[20px] font-bold text-center dark:text-white ">
        {text}
      </p>
    </Link>
  );
}

HomePageCard.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
export default HomePageCard;
