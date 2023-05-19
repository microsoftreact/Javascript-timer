let countNumber = document.querySelector(".count");
let playButton = document.querySelector(".btn-play");
let pauseButton = document.querySelector(".btn-pause");

let count = 0;
let click;

playButton.addEventListener("click", () => {
  click = setInterval(() => {
    count++;
    countNumber.innerHTML = count;
  }, 1000);
});

pauseButton.addEventListener("click", () => {
  setTimeout(() => {
    clearInterval(click);
  }, 1);
});

// playButton.addEventListener("click", () => {
//   counter;
// });

// const play = playButton.addEventListener("click", () => {
//   counter();
// });
