const noteEl = document.querySelector("#note");
const statusEl = document.querySelector("#status");

let currentContent = "";
window.addEventListener("DOMContentLoaded", () => {
  currentContent = noteEl.textContent;
});

noteEl.addEventListener("blur", () => {
  const newContent = noteEl.innerHTML;
  if (currentContent === newContent) return;
  currentContent = newContent;
  statusEl.textContent = "Note saved successfully!";
  console.log(currentContent);
});
noteEl.addEventListener("focus", () => {
  statusEl.textContent = "";
});
