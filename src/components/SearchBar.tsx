import React, { ChangeEvent, useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchTerm);
    // You can do something with the searchTerm value here, like search your database or filter your results
  };

  return (
    <div className="ml-8 flex items-center">
      <div className="relative flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 -mr-0.5 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1"
          value={searchTerm}
          onChange={handleInputChange}
        />

        <button
          className="relative z-[2] flex items-center rounded-r bg-themeIndigo px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* <div className="sm:-my-px ml-6 sm:flex sm:space-x-8">
              <div className="relative flex w-full align-middle">
                <div className="h-16 w-full flex items-center">
                  <input
                    type="text"
                    className="w-full px-4 py-2 pr-10 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue h-7"
                    placeholder="Search..."
                  />
                </div>

                <button type="submit" className="relative self-center right-6">
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
            </div> */}
    </div>
  );
}
