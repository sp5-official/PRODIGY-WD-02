const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');
const lapsList = document.querySelector('.laps');

let startTime;
let elapsedTime = 0;
let timerInterval;

startBtn.addEventListener('click',function() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 10);
});

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  const centiseconds = Math.floor((milliseconds % 1000) / 10).toString().padStart(2, '0');
  return `${minutes}:${seconds}:${centiseconds}`;
}

pauseBtn.addEventListener('click',function() {
  clearInterval(timerInterval);
});


resetBtn.addEventListener('click',function() {
  clearInterval(timerInterval);
  display.textContent = '00:00:00';
  elapsedTime = 0;
  lapsList.innerHTML = '';
});

lapBtn.addEventListener('click',function() {
  const lapTime = formatTime(elapsedTime);
  const lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  lapsList.appendChild(lapItem);
});

