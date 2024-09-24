import Layout from "@/components/Layouts/Layout"
import PropTypes from "prop-types";

function Error({children}) {
  return (
    <>
      <Layout>
        <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-x-clip overflow-y-auto">
          <div className="absolute top-[40%] left-[45%]">
            <h2 className="text-Primary-800 font-semibold text-[25px]">
              {children}
            </h2>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Error

Error.propTypes = {
  children: PropTypes.node,
}