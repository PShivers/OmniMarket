import React from "react";

export default function LandingPage() {
  return (
    <main className="py-10 bg-themeGray">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Welcome to</span>
            <span className="block text-indigo-600 xl:inline"> OmniMart</span>
          </h1>
          <p className="mt-3 text-themeWhite text-base sm:mt-5 fm sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
            At OmniMart, we take pride in providing a seamless shopping
            experience that's unparalleled. We offer a vast selection of
            products that cater to every need and desire, ranging from household
            essentials to unique and hard-to-find items. With us, you'll find
            anything you can imagine, all in one convenient place and at
            competitive prices. Shop with us and experience the ultimate
            convenience of hassle-free shopping for everything you need.{" "}
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
  );
}
