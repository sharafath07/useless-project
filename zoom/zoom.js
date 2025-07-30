let scale = 1;
const zoomBox = document.getElementById("zoom-box");

window.addEventListener("wheel", (event) => {
  event.preventDefault();
  if (event.deltaY > 0) {
    scale += 0.05;
  } else {
    scale = Math.max(1, scale - 0.05);
  }
  zoomBox.style.transform = `scale(${scale})`;
});
