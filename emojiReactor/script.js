const btns = document.querySelectorAll(".emoji-btn");
btns.forEach((btn) => {
  btn.addEventListener("click", () => updateCount(btn));
});

function updateCount(btnEl) {
  const btnElId = btnEl.id;
  const count = btnEl.querySelector(`.count`);
  const currCount = Number(count.textContent.split("/")[0]);
  if (currCount == 10) return;
  count.textContent = `${currCount + 1}/10`;
}
