const projects = [
  {
    title: "Zoom-Zoom Website",
    description: "A website zoom in to infinite times while scrolling down.",
    link: "zoom/zoom.html"
  },
  {
    title: "Useless Clock",
    description: "A clock that always shows the wrong time.",
    link: "clock/clock.html"
  },
  {
    title: "Catch Me",
    description: "A button that moves from position whenever you hover on the button.",
    link: "button/button.html"
  },
  {
    title: "404",
    description: "A website generate 404 error messages.",
    link: "404/404.html"
  },
  {
    title: "Scroller",
    description: "A website that scroll to infinite.",
    link: "scroll/scroll.html"
  },
  {
    title: "Hacker",
    description: "A hacking Commander to hack google.",
    link: "hacking/hacking.html"
  },
   {
    title: "Ask me",
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
