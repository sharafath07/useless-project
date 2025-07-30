const clock = document.getElementById("clock");
const comment = document.getElementById("comment");

const comments = [
  "Is this even the right time?",
  "Time is fake anyway.",
  "Do you even care what time it is?",
  "Probably too late for anything useful.",
  "Perfect time for doing nothing.",
  "Time flies... but you're not."
];

function getRandomTime() {
  let hours = Math.floor(Math.random() * 30); // up to 29
  let minutes = Math.floor(Math.random() * 100); // up to 99
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function updateClock() {
  clock.textContent = getRandomTime();
  comment.textContent = comments[Math.floor(Math.random() * comments.length)];
}

setInterval(updateClock, 3000);
updateClock();
