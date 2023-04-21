import React from "react";

export default function Home() {
  return (
    // <div className="min-h-screen bg-stone-600">
    //   <header className=''>
    //     <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-around">
    //       <div>
    //         Home
    //       </div>
    //       <div>
    //         Shop
    //       </div>
    //       <div>
    //         About Us
    //       </div>
    //       <div>
    //         Contact
    //       </div>
    //       <div>
    //         Contact Us
    //       </div>
    //       </nav>

    //     </header>
    // </div>
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-dark shadow h-16">
        <nav className="max-w-100 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex w-full">
              <img src="logo.svg" alt="OmniMart logo" />

              <div className="flex-shrink-0 flex items-center text-indigo-600">
                OmniMart
              </div>

              <div className="sm:-my-px ml-6 sm:flex sm:space-x-8">
                <div className="relative flex w-full align-middle">
                  <div className="h-16 w-full flex items-center">
                    <input
                      type="text"
                      className="w-full px-4 py-2 pr-10 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue h-7"
                      placeholder="Search..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="relative self-center right-6"
                  >
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 22l-6-6"></path>
                      <path d="M16 10a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="rounded-md  border border-transparent text-base font-small text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Welcome to</span>
              <span className="block text-indigo-600 xl:inline"> OmniMart</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 fm sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
              At OmniMart, we take pride in providing a seamless shopping
              experience that's unparalleled. We offer a vast selection of
              products that cater to every need and desire, ranging from
              household essentials to unique and hard-to-find items. With us,
              you'll find anything you can imagine, all in one convenient place
              and at competitive prices. Shop with us and experience the
              ultimate convenience of hassle-free shopping for everything you
              need.{" "}
            </p>
            <div className="mt-5 sm:mt-8 flex justify-center">
              <div className="w-1/2 flex justify-around">
                <button className="rounded-full px-8 py-3 text-white bg-indigo-600 hover:bg-indigo-700">
                  Get started
                </button>

                <button className="rounded-full px-8 py-3 text-indigo-600 bg-white hover:bg-gray-50">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
