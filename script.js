const button = document.getElementById('myButton');

const emojis = ["🥰", "😎", "😂", "😱", "🤩", "😜", "🙈", "😍", "😇", "😉"];


    button.addEventListener('mouseover', () => {
      const maxX = window.innerWidth - button.offsetWidth;
      const maxY = window.innerHeight - button.offsetHeight;

      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;

      button.style.left = `${newX}px`;
      button.style.top = `${newY}px`;

      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      button.textContent = `Catch Me If You Can ${randomEmoji}`;
    });

    button.addEventListener("click", (e) => {
      const particles = 30;
      for (let i = 0; i < particles; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        const x = e.clientX;
        const y = e.clientY;

        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 100;

        const offsetX = Math.cos(angle) * radius + "px";
        const offsetY = Math.sin(angle) * radius + "px";

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty("--x", offsetX);
        particle.style.setProperty("--y", offsetY);

        document.body.appendChild(particle);
        button.textContent = "You Won😒"

        // Remove particle after animation
        setTimeout(() => {
          particle.remove();
        }, 700);
      }
    });