import Layout from "@/components/Layouts/Layout";
import { useState } from "react"
import { BounceLoader } from "react-spinners"

function Loading() {
  const [load, setLoad] = useState(true)

  setTimeout(function () {
    setLoad(false)
    // console.log(load)
  }, 10000);

  return (
    <>
      <Layout>
        <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-x-clip overflow-y-auto">
          {load ? (
            <div className="absolute top-[40%] left-[45%]">
              <BounceLoader color="#BE2020" size={130} />
            </div>
          ) : (
            <div className="absolute top-[45%] left-[45%]">
              <h2 className="text-Primary-800 font-semibold text-[25px]">You are offline :(</h2>
            </div>
          )}
        </div>
      </Layout>
    </>
  )
}

export default Loading