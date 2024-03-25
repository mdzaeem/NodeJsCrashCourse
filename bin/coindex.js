console.log("Allah hu Akbar");

setTimeout(() => {
  console.log("Subhanallah");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("Bissmillah");
}, 1000);
