import React from "react";

export default function Contact() {
  return (
    <section className="text-gray-600 dark:text-gray-300 body-font relative w-full dark:bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white text-gray-900">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I'll get in touch soon.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600 dark:text-gray-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full dark:bg-gray-50 bg-gray-100 bg-opacity-50 rounded border   border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600 dark:text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full dark:bg-gray-50 bg-gray-100 bg-opacity-50 rounded border   border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600 dark:text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full dark:bg-gray-50 bg-gray-100 bg-opacity-50 rounded border   border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 dark:border-gray-900 text-center">
              <a className="text-indigo-500">akhilmohammed05@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
