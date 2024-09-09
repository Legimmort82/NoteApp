import Image from "next/image"


function HomePageCard({text, img}) {
  return (
    <div className="bg-Primary-300 dark:bg-dark-100 flex flex-col items-center justify-around w-[40%] rounded-md px-12 pb-5 min-h-[180px]">
        <Image className="w-[60px] h-[60px]" src={img} alt=""/>
        <p className="text-[20px] font-bold text-center dark:text-white ">
            {text}
        </p>
    </div>
  )
}

export default HomePageCard