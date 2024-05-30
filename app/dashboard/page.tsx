'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen">
      <nav className="bg-white dark:bg-gray-900 py-3.5 px-6 w-full lg:shadow-none shadow-sm fixed">
        <div className="flex items-center justify-between gap-1 sm:gap-6 lg:flex-row flex-col">
          <div className="flex justify-between items-center lg:w-auto w-full">
            <a href="#" className="block">
              <img
                src="https://pagedone.io/asset/uploads/1701235273.png"
                alt="Pagedone logo image"
                className="block dark:hidden"
              />
              <img
                src="https://pagedone.io/asset/uploads/1712310504.png"
                alt="Pagedone logo image"
                className="hidden dark:block"
              />
            </a>
            <button
              onClick={handleToggle}
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-navbar"
              aria-expanded={isNavbarOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            id="mobile-navbar"
            className={`lg:flex flex-row w-full flex-1 ${isNavbarOpen ? 'flex' : 'hidden'}`}
          >
            <ul className="text-center flex lg:flex-row flex-col lg:gap-2 xl:gap-4 gap-2 items-center lg:ml-auto mx-auto">
              <li>
                <a
                  href="#"
                  className="py-1.5 px-3 bg-indigo-600 transition-all duration-500 ease-in-out text-xs text-white font-semibold rounded-md"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-white hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                >
                  Employees
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-white hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                >
                  Attendances
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-white hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                >
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-white hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                >
                  Leaves
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-white hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                >
                  Payroll
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-white hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                >
                  Document
                </a>
              </li>
            </ul>
            <div className="text-center lg:flex items-center gap-1 sm:gap-4 lg:ml-auto mx-auto">
              <div className="flex items-center lg:justify-start justify-center gap-1 sm:gap-2">
                <div className="relative w-max p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.5001 17.5L15.4167 15.4167M15.8334 9.16667C15.8334 5.48477 12.8486 2.5 9.16673 2.5C5.48483 2.5 2.50006 5.48477 2.50006 9.16667C2.50006 12.8486 5.48483 15.8333 9.16673 15.8333C11.0006 15.8333 12.6615 15.0929 13.8668 13.8947C15.0814 12.6872 15.8334 11.0147 15.8334 9.16667Z"
                      stroke="#6B7280"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-200 dark:text-gray-700 font-normal">|</p>
                <button className="w-8 sm:w-11 h-8 sm:h-11 flex items-center justify-center lg:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M11.3235 2.5H9.16667C6.02397 2.5 4.45262 2.5 3.47631 3.47631C2.5 4.45262 2.5 6.02397 2.5 9.16667V10.8333C2.5 13.976 2.5 15.5474 3.47631 16.5237C4.45262 17.5 6.02397 17.5 9.16667 17.5H10.8333C13.976 17.5 15.5474 17.5 16.5237 16.5237C17.5 15.5474 17.5 13.976 17.5 10.8333V9.55882M10 10H5.83333M12.5 13.3333H5.83333M17.5 4.58333C17.5 5.73393 16.5673 6.66667 15.4167 6.66667C14.2661 6.66667 13.3333 5.73393 13.3333 4.58333C13.3333 3.43274 14.2661 2.5 15.4167 2.5C16.5673 2.5 17.5 3.43274 17.5 4.58333Z"
                      stroke="#6B7280"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <button className="group py-2 px-2 lg:pr-5 lg:pl-3.5 lg:mx-0 mx-auto flex items-center whitespace-nowrap gap-1.5 font-medium text-sm text-white border border-solid border-indigo-600 bg-indigo-600 rounded-lg transition-all duration-300 hover:bg-indigo-700 hover:border-indigo-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9 4.5V13.5M13.5 9H4.5"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <span className="max-lg:hidden">Add Employee</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-[70px]">
        <div className="py-4 lg:px-8 px-3 bg-gray-50 dark:bg-gray-900">
          <div className="block max-lg:pl-6">
            <h6 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white whitespace-nowrap mb-1.5">
              Welcome back,
              <span className="text-indigo-600 text-base sm:text-lg font-semibold">
                Ronald!
              </span>
            </h6>
            <p className="text-xs font-medium text-gray-900 dark:text-white">Home</p>
          </div>
        </div>
        <div className="w-full p-8 bg-white rounded-3xl">
          <div className="border-gray-200 border rounded-xl h-full">
            {/* Add your content here */}
          </div>
        </div>
      </div>
    </div>
  );
}
