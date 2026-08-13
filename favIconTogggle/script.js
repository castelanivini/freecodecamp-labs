const list = document.querySelectorAll(".favorite-icon");
const emptyHearth = "&#9825";
const heartFilled = "&#10084";

list.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("filled");
    if (btn.classList.contains("filled")) {
      btn.innerHTML = heartFilled;
    } else {
      btn.innerHTML = emptyHearth;
    }
  });
});
