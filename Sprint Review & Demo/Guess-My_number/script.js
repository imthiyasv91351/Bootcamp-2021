"use strict";
// const x = 10;
// console.log(x);
// const x = 10;
// console.log(x);

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// console.log(document.querySelector(".message").textContent);

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 10;
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// document.querySelector(".number").textContent = secretNumber;

const guessMyNumber = function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number !";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "☑️ Correct answer!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too high!" : "📈 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".number").textContent = secretNumber;
    }
  }
};

document.querySelector(".check").addEventListener("click", guessMyNumber);
document.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    guessMyNumber();
  }
});

// document.querySelector(".again").addEventListener("click", function () {
//   window.location.reload();
// });
document.querySelector(".again").onclick = () => {
  window.location.reload();
};
