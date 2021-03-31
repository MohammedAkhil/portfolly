import React from "react";

export default function About() {
  return (
    <div className="w-full h-screen bg-white dark:bg-black">
      <h2 className=" p-8 text-2xl md:text-5xl font-extrabold md:p-12 h-1/6 dark:text-white ">
        About me
      </h2>
      <div className="flex items-center justify-center h-3/6 flex-col lg:flex-row content-start">
        <img
          src="/assets/dp.jpg"
          alt="dp-dark"
          className="w-44 sm:w-64 p-4 block dark:hidden"
        />

        <img
          src="/assets/dark.jpg"
          alt="dp-dark"
          className="w-44 sm:w-64 p-4 hidden dark:block"
        />

        <span className="dark:text-white  text-sm sm:text-2xl lg:text-3xl font-medium text-center lg:text-left p-4 sm:p-8 w-full sm:w-5/6 lg:w-3/6">
          Hey there, I am a full stack developer with 4 years of experience
          working in the tech industry. Love making apps with focus on UI/UX.
          Flutter enthusiast.
        </span>
      </div>
      <div className="flex flex-wrap p-8 justify-center space-x-4 space-y-4 2xl:max-w-6xl mx-auto">
        <img
          className="mt-4"
          src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"
        />
        <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
        <img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white" />
        <img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white" />
        <img src="https://img.shields.io/badge/go-%2300ADD8.svg?&style=for-the-badge&logo=go&logoColor=white" />
        <img src="https://img.shields.io/badge/dart-%230175C2.svg?&style=for-the-badge&logo=dart&logoColor=white" />
        <img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge" />
        <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        <img src="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white" />
        <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white" />
      </div>
    </div>
  );
}
