import React from "react";
import About from "./About";
import style from "../styles/About.module.css";
import Contact from "./Contact";
import Stats from "./Stats";

function App() {
  return (
    <div>
      <div
        className="bg-cover bg-center w-full h-screen flex flex-col"
        style={{
          backgroundImage: `-webkit-linear-gradient(rgba(0, 0, 0, 0.65) 100%, rgba(0, 0, 0, 0.65) 100%),url('/assets/main.jpg')`,
        }}
      >
        <div className="flex justify-between sm:justify-between w-full text-blue-200 py-2 px-2 lg:px-32 ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com"
            className="hover:text-blue-400 hover:underline"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com"
            className="hover:text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com"
            className="hover:text-blue-400 hover:underline"
          >
            Twitter
          </a>
        </div>
        <div className="flex flex-col justify-center p-4 md:p-24 m-auto">
          <span
            className={`text-md sm:text-2xl md:text-3xl lg:text-5xl font-extrabold ${style.bg_anim}`}
          >
            Portfolio of
          </span>
          <span
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold ${style.bg_anim}`}
          >
            Mohammed Akhil
          </span>
        </div>
      </div>
      <About />
      <Stats />
      <Contact />
    </div>
  );
}

export default App;
