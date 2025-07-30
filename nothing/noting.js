const button = document.getElementById("uselessBtn");
const message = document.getElementById("message");

const responses = [
  "Wow. You broke it.",
  "Nothing happened. Impressive.",
  "That was pointless.",
  "The universe is disappointed.",
  "You clicked it. Are you proud?",
  "Congratulations! You did absolutely nothing."
];

// Show sarcastic message when clicked
button.addEventListener("click", () => {
  const randomMsg = responses[Math.floor(Math.random() * responses.length)];
  message.textContent = randomMsg;
});
