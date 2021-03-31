onmessage = function (e) {
  console.log("Worker: Message received from main script");
  const window = e.data;
  const workerResult = "Window: " + window;
  onClickNotify();
  console.log("Worker: Posting message back to main script");
  postMessage(workerResult);
};

const onClickNotify = () => {
  // Let's check if the browser supports notifications
  setTimeout(() => {
    var notification = new Notification("Hi there!");
  }, 3000);

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
};
