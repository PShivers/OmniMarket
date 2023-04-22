import React from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="shadow border-b-2 border-themeWhite bg-themeDarkGray h-16">
      <nav className="max-w-100 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex w-full ">
            <img src="logo.svg" alt="OmniMart logo" />

            <div className="flex-shrink-0 flex items-center text-indigo-600">
              OmniMart
            </div>
            <SearchBar />
          </div>

          {/* <div className="flex justify-center">
            <button
              type="button"
              className="rounded-md border border-transparent text-base font-small text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div> */}
        </div>
      </nav>
    </header>
  );
}
