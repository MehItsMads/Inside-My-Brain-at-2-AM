// main.js
document.addEventListener("DOMContentLoaded", () => {
  const dot = document.querySelector(".cursor-dot");
  const outline = document.querySelector(".cursor-outline");

  if (!dot || !outline) return;

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    outline.style.left = x + "px";
    outline.style.top = y + "px";
  });
});
