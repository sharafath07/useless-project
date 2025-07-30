const output = document.getElementById("output");
const input = document.getElementById("commandInput");

const responses = {
  "hack google": "Google has been hacked. You now own 10% of the internet.",
  "delete system32": "Nice try. But your mom stopped you.",
  "access nasa": "Mission aborted. Too many aliens in orbit.",
  "self destruct": "Boom. Just kidding.",
  "sudo win": "You are now President of the Internet.",
  "help": "Available commands: hack google, delete system32, access nasa, self destruct, sudo win, help"
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();
    const response = responses[command] || "Command not recognized. Try 'help'.";
    output.innerHTML += `$ ${command}\n${response}\n\n`;
    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});
