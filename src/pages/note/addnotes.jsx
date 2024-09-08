import Layout from "@/components/Layout";
import Image from "next/image";
import notedate from "@/assets/icons/note-date.svg"
import arrowimg from "@/assets/icons/arrow.svg"

function addnotes() {
  return (
    <>
    <Layout>
    <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-clip">
        <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] shadow-md shadow-gray-400 "></div>

        <div className="pl-36 pr-40 py-7">
            <div className="pb-14">
                <h2 className="text-gray-400 text-[40px] font-semibold mb-1">Type your title here ...</h2>
                <hr className="h-[6px]  bg-Primary-600" />

                <div className=" flex justify-end items-center mt-3">
                    <div className="flex items-center">
                        <p className="font-medium text-[18px] dark:text-white">Color :</p>
                        <div className="w-8 h-8 rounded-[50%] bg-Primary-800 ml-5"></div>
                    </div>

                    <button className="bg-Primary-300 text-[18px] text-gray-500 font-semibold rounded-md py-[2px] px-10 ml-[65px]">TagName</button>
                    
                    <div className="flex ml-[65px]">
                        <p className="text-gray-500 text-[17px] font-medium mr-2 dark:text-white">2022/01/05</p>
                        <Image src={notedate} />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col items-center w-[35%]">
                    <p className="font-semibold text-[26px] mb-9 dark:text-white">Pick a color :</p>

                    <div className="flex flex-wrap gap-12">
                        <div className="cursor-pointer w-14 h-14 rounded-[50%] bg-note-red"></div>
                        <div className="cursor-pointer w-14 h-14 rounded-[50%] bg-note-yellow"></div>
                        <div className="cursor-pointer w-14 h-14 rounded-[50%] bg-note-green"></div>
                        <div className="cursor-pointer w-14 h-14 rounded-[50%] bg-note-purple"></div>
                        <div className="cursor-pointer w-14 h-14 rounded-[50%] bg-note-ligh-blie"></div>
                        <div className="cursor-pointer w-14 h-14 rounded-[50%] bg-note-orange"></div>
                        <div className="cursor-pointer w-14 h-14 rounded-[50%] bg-note-pink"></div>
                        <div className="cursor-pointer w-14 h-14 rounded-[50%] bg-note-dark-blue"></div>
                    </div>
                </div>

                <div className="flex flex-col w-[50%]">
                    <div className="flex justify-between items-center mb-14">
                        <p className="text-[26px] font-semibold dark:text-white">Select your Folder:</p>

                        <div className="bg-Primary-400 flex items-center justify-between rounded-md py-3 px-4 w-[33%]">
                            <p className="text-[20px] font-semibold">Folder Name</p>
                            <Image className="cursor-pointer w-6 h-6" src={arrowimg}/>
                        </div>
                    </div>

                    <p className="text-[26px] font-semibold dark:text-white">Write your tag :</p>

                    <div className="mt-8">
                        <p className="text-gray-400 text-[26px] font-semibold">Work</p>
                        <hr className="h-[4.5px]  bg-Primary-600 text-gray-500" />
                    </div>
                </div>
            </div>

            <textarea className="bg-Primary-100 text-[24px] rounded-lg border-[3px] w-[100%] h-[400px] border-Primary-500 border-solid placeholder:text-gray-400 placeholder:text-[25px] placeholder:font-medium placeholder:pl-4 placeholder:pt-1 " type="text" placeholder="Type your content here ..."/>
        </div>
    </div>
    </Layout>
    </>
  )
}

export default addnotes