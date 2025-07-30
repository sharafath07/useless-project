const answerEl = document.getElementById("answer");

function getAnswer() {
  const answers = [
    "🔥 YES 🔥",
    "💀 NO 💀"
  ];
  const random = Math.floor(Math.random() * answers.length);
  answerEl.textContent = answers[random];
  answerEl.style.color = random ? "#ff4d4d" : "#00ffcc";
}
