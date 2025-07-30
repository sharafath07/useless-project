const projects = [
  {
    title: "Zoom-Zoom Website",
    description: "A button that runs away when you try to click it.",
    link: "zoom/zoom.html"
  },
  {
    title: "Useless Clock",
    description: "A clock that always shows the wrong time.",
    link: "clock/clock.html"
  },
  {
    title: "The Useless Button",
    description: "Clicking it does... absolutely nothing!",
    link: "button/button.html"
  },
  {
    title: "Useless Timer",
    description: "A timer that times nothing useful.",
    link: "404/404.html"
  },
  {
    title: "Confused Translator",
    description: "Turns your words into weird nonsense.",
    link: "scroll/scroll.html"
  },
  {
    title: "Anti-Fitness Tracker",
    description: "Rewards you for being lazy.",
    link: "hacking/hacking.html"
  },
   {
    title: "Anti-Fitness Tracker",
    description: "Rewards you for being lazy.",
    link: "drama/drama.html"
  }
];

const cardContainer = document.getElementById("cardContainer");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <button onclick="location.href='${project.link}'">Go</button>
  `;

  cardContainer.appendChild(card);
});
