export default
  function Login() {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center mr-[100px] gap-20">
          <div className="">
            <img src="cart.jpg" className="h-[600px] w-[600px]" />
          </div>
          <div>
            <New />
          </div>
        </div>
      </div>
    </>
  )

}
function Old() {
  return (
    <>
      <div className="flex items-center justify-center  pr-8 pl-7">
        <div className=" bg-white text-left">
          <div className=" flex justify-center mb-6 flex-col">
            <h3 className="text-[36px] font-bold text-left">Login </h3>
            <h3 className="text-[14px] text-left">Enter your details below</h3>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-[16px] font-bold mb-2" htmlFor="username">
              Email or Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              id="username"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-[16px] font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            >
              Log In
            </button>
            <a href="#" className="inline-block align-baseline font-bold text-sm text-purple-600 hover:text-purple-700">
              Forget Password?
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

function New() {
  return (
    <>
      <div className="flex items-center justify-center  pr-8 pl-7">
        <div className=" bg-white text-left">
          <div className=" flex justify-center mb-6 flex-col">
            <h3 className="text-[36px] font-bold text-left">Create an Account </h3>
            <h3 className="text-[14px] text-left">Enter your details below</h3>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-[16px] font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              id="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-[16px] font-bold mb-2" htmlFor="username">
              Email or Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              id="username"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-[16px] font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <button
            className="bg-purple-600 hover:bg-purple-700 w-full text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Sign Up
          </button>

          <button
            className="bg-white border border-solid hover:bg-gray-200 w-full text-black font-bold py-2 px-4 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            <div className="flex justify-center items-center gap-2">
              <img src="google.png" className="w-[20px] h-[20px]" /> <h1>Sign up with Google</h1>
            </div>
          </button>
          <div className="flex justify-center items-center gap-2 text-[16px]">
            <h1 className="font-normal text-[#4d4d4d]">Already have account?</h1>
            <a href="" className="underline font-bold">Login</a>
          </div>
        </div>
      </div>
    </>
  )
}