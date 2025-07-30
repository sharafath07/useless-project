const messages = [
  "🚫 404: Brain Not Found",
  "🐢 404: Too Slow to Load",
  "☕ 404: Coffee Overflow",
  "🧠 404: Common Sense Missing",
  "📦 404: Page Lost in Transit",
  "🔥 404: Server Burned Down",
  "😴 404: Page Fell Asleep",
  "👽 404: Alien Abduction",
  "🔌 404: Disconnected from Reality"
];

function generateError() {
  const message = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("error-message").textContent = message;
}
