import React, { useEffect, useState } from "react";

export default function Stats() {
  const [isDark, updateMode] = useState(false);
  useEffect(() => {
    const isDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    updateMode(isDark);
  }, [isDark]);

  const onClickNotify = () => {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      createWorker(window);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          createWorker(window);
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  };

  return (
    <div className="w-full flex flex-col flex-wrap justify-center items-center space-y-8 p-4 dark:bg-black">
      <h2 className="p-8 text-2xl md:text-5xl font-extrabold md:p-12 h-1/6 dark:text-white self-start ">
        My Stats
      </h2>
      <button onClick={onClickNotify}>Click here</button>
      <p className="p-4">
        <a href="https://github.com/ryo-ma/github-profile-trophy">
          <img
            src={`https://github-profile-trophy.vercel.app/?username=mohammedakhil&margin-w=32${
              isDark && "&theme=darkhub"
            }`}
            alt="mohammedakhil"
          />
        </a>
      </p>

      <div className="px-8 py-2 max-w-4xl shadow-md dark:border-gray-500 bg-white dark:bg-black border-solid border-2 rounded">
        <h3 className="font-bold text-xl text-purple-700 self-center py-4 dark:text-white">
          Languages and Tools
        </h3>
        <p className="p-4 flex flex-wrap space-x-6 space-y-3 justify-center ">
          <a
            className="my-3"
            href="https://developer.android.com"
            target="_blank"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
              alt="android"
              width={40}
              height={40}
            />
          </a>
          <a href="https://dart.dev" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
              alt="dart"
              width={40}
              height={40}
            />
          </a>
          <a href="https://www.docker.com/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
              alt="docker"
              width={40}
              height={40}
            />
          </a>
          <a href="https://www.electronjs.org" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"
              alt="electron"
              width={40}
              height={40}
            />
          </a>
          <a href="https://expressjs.com" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width={40}
              height={40}
            />
          </a>
          <a href="https://firebase.google.com/" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="firebase"
              width={40}
              height={40}
            />
          </a>
          <a href="https://flutter.dev" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
              alt="flutter"
              width={40}
              height={40}
            />
          </a>
          <a href="https://golang.org" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
              alt="go"
              width={40}
              height={40}
            />
          </a>
          <a href="https://graphql.org" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
              alt="graphql"
              width={40}
              height={40}
            />
          </a>
          <a href="https://heroku.com" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
              alt="heroku"
              width={40}
              height={40}
            />
          </a>
          <a href="https://www.invisionapp.com/" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg"
              alt="invision"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width={40}
              height={40}
            />
          </a>
          <a href="https://jestjs.io" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
              alt="jest"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://karma-runner.github.io/latest/index.html"
            target="_blank"
          >
            <img
              src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg"
              alt="karma"
              width={40}
              height={40}
            />
          </a>
          <a href="https://kotlinlang.org" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg"
              alt="kotlin"
              width={40}
              height={40}
            />
          </a>
          <a href="https://kubernetes.io" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"
              alt="kubernetes"
              width={40}
              height={40}
            />
          </a>
          <a href="https://www.mongodb.com/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width={40}
              height={40}
            />
          </a>
          <a href="https://www.mysql.com/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              width={40}
              height={40}
            />
          </a>
          <a href="https://www.nginx.com" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"
              alt="nginx"
              width={40}
              height={40}
            />
          </a>
          <a href="https://nodejs.org" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width={40}
              height={40}
            />
          </a>
          <a href="https://www.postgresql.org" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
              width={40}
              height={40}
            />
          </a>
          <a href="https://www.python.org" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
              width={40}
              height={40}
            />
          </a>
          <a href="https://reactjs.org/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width={40}
              height={40}
            />
          </a>
          <a href="https://reactnative.dev/" target="_blank">
            <img
              src="https://reactnative.dev/img/header_logo.svg"
              alt="reactnative"
              width={40}
              height={40}
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="tailwind"
              width={40}
              height={40}
            />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width={40}
              height={40}
            />
          </a>
          <a href="https://webpack.js.org" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
              alt="webpack"
              width={40}
              height={40}
            />
          </a>
          <a href="https://www.adobe.com/products/xd.html" target="_blank">
            <img
              src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg"
              alt="xd"
              width={40}
              height={40}
            />
          </a>
        </p>
      </div>

      <div className="flex flex-wrap p-4 max-w-7xl justify-center items-end">
        <p className="p-4">
          &nbsp;
          <img
            src={`https://github-readme-stats.vercel.app/api?username=mohammedakhil&show_icons=true&locale=en&count_private=true&theme=${
              isDark ? "midnight-purple" : "buefy"
            }`}
            alt="mohammedakhil"
          />
        </p>

        <p className="p-4">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=mohammedakhil&theme=${
              isDark ? "midnight-purple" : "buefy"
            }`}
            alt="mohammedakhil"
          />
        </p>
        <p className="p-4">
          <img
            src={`https://github-readme-stats.vercel.app/api/wakatime?username=mohammedakhil&theme=${
              isDark ? "midnight-purple" : "buefy"
            }`}
            alt="mohammedakhil"
          />
        </p>
        <p className="p-4">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=mohammedakhil&show_icons=true&locale=en&layout=compact&theme=${
              isDark ? "midnight-purple" : "buefy"
            }`}
            alt="mohammedakhil"
          />
        </p>
      </div>
    </div>
  );
}

const createWorker = (window) => {
  if (window.Worker) {
    const myWorker = new Worker("worker.js");

    myWorker.postMessage("test");

    myWorker.onmessage = function (e) {
      console.log("Message received from worker");
    };
  } else {
    console.log("Your browser doesn't support web workers.");
  }
};
