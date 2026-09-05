const startTimer = document.getElementById("startTimer");
const timerText = document.getElementById("timerText");

let count = 0;

startTimer.addEventListener("click", () => {
  count = 0;

  const interval = setInterval(() => {
    count++;

    timerText.textContent = `Повідомлення №${count}`;

    console.log(`Повідомлення №${count}`);

    if (count === 5) {
      clearInterval(interval);
      timerText.textContent = "Таймер завершено";
    }
  }, 1000);
});


const startAnimation = document.getElementById("startAnimation");
const box = document.getElementById("box");

let position = 0;

startAnimation.addEventListener("click", () => {
  position = 0;

  const animation = setInterval(() => {
    position += 10;

    box.style.left = position + "px";

    if (position >= 500) {
      clearInterval(animation);
    }
  }, 100);
});



const startGame = document.getElementById("startGame");
const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");
const scoreElement = document.getElementById("score");

let score = 0;
let gameInterval;

startGame.addEventListener("click", () => {
  score = 0;
  scoreElement.textContent = score;

  target.style.display = "block";

  gameInterval = setInterval(() => {
    const maxX = gameArea.clientWidth - 40;
    const maxY = gameArea.clientHeight - 40;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
  }, 1000);
});

target.addEventListener("click", () => {
  score++;
  scoreElement.textContent = score;
});



const secondsInput = document.getElementById("seconds");
const startCountdown = document.getElementById("startCountdown");
const countdownText = document.getElementById("countdownText");

startCountdown.addEventListener("click", () => {
  const seconds = Number(secondsInput.value);

  if (!seconds || seconds <= 0) {
    countdownText.textContent = "Введіть правильну кількість секунд";
    return;
  }

  countdownText.textContent = `Чекаємо ${seconds} секунд...`;

  setTimeout(() => {
    countdownText.textContent = "Час вийшов";
  }, seconds * 1000);
});