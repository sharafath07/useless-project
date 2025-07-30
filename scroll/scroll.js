const container = document.getElementById('content');

const quotes = [
  "The quieter you become, the more you can hear.",
  "In the middle of chaos, there is also opportunity.",
  "A bug-free program is an illusion.",
  "The best way to predict the future is to invent it.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Experience is the name everyone gives to their mistakes.",
  "Everything should be made as simple as possible, but no simpler.",
  "Programs must be written for people to read, and only incidentally for machines to execute.",
  "The computer was born to solve problems that did not exist before.",
  "Fix the cause, not the symptom.",
  "Good code is its own best documentation.",
  "The function of good software is to make the complex appear simple.",
  "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
  "When in doubt, use brute force.",
  "Premature optimization is the root of all evil.",
  "In theory, there is no difference between theory and practice. But, in practice, there is.",
  "It’s not a bug – it’s an undocumented feature.",
  "Code never lies, comments sometimes do.",
  "First, solve the problem. Then, write the code.",
  "One man’s crappy software is another man’s full-time job."
];

// Random quote generator
function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

// Add quotes to page
function addQuotes(count = 10) {
  for (let i = 0; i < count; i++) {
    const line = document.createElement('div');
    line.className = 'line';
    line.textContent = getRandomQuote();
    container.appendChild(line);
  }
}

// Infinite scroll
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    addQuotes(10);
  }
});

// Initial load
addQuotes(20);
