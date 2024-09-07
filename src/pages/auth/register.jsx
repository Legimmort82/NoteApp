export default function Register() {
    return (
      <>
      <div className="flex flex-col items-center bg-red-100 h-screen">
        <div className="mb-7">
            <h1 className="text-red-700  text-[90px] font-bold">Note Smart</h1>
        </div>

        <div className="flex justify-evenly">
            <div className="mr-12 w-[30%]">
                <form className="flex flex-col items-center" >
                    <label className="text-gray-800 text-[15px] mb-4 font-semibold" >
                        Email Address
                    </label>
                    <input className="rounded-md h-10 mb-8 w-[100%]" type="email" />

                    <label className="text-gray-800 text-[15px] mb-4 font-semibold" >
                        Password
                    </label>
                    <input className="rounded-md h-10 mb-8 w-[100%]" type="text" />

                    <label className="text-gray-800 text-[15px] mb-4 font-semibold">
                        Confirm Password
                    </label>
                    <input className="rounded-md h-10 mb-8 w-[100%]" type="text" />

                    <button className="bg-red-800 text-white py-3 px-[90px] rounded-md mb-3" type="submit">Create Account</button>

                    <a className="text-red-800 font-bold text-[16px]" href="#">Already have an account?</a>
                </form>
            </div>

            <div className="flex flex-col items-center w-[30%]">
                <h2 className="text-gray-950 mb-[20px] text-[60px] text-center font-bold">Create a free account</h2>
                <p className="text-gray-700 text-center text-[25px]">
                    Join NoteSmart for free 
                    Create and manage unlimited notes 
                    enjoy the friendly and easy to use enviroment with various features
                </p>
            </div>
        </div>
      </div>  
      </>
    );
  }