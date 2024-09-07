import Image from "next/image"


function HomePageCard({text, img}) {
  return (
    <div className="bg-home-page-card dark:bg-home-page-card-dark flex flex-col items-center w-[40%] rounded-md px-12 pb-5 min-h-[140px]">
        <Image className="w-[60px] h-[60px]" src={img}/>
        <p className="text-[20px] font-bold text-center dark:text-white ">
            {text}
        </p>
    </div>
  )
}

export default HomePageCard