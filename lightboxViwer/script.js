const images = document.querySelectorAll(".gallery-item");
const lightboxSelector = document.querySelector(".lightbox");
const buttonSelector = document.querySelector("#close-btn");

images.forEach((img) =>
  img.addEventListener("click", (event) => {
    const lightboxImageSelector = document.querySelector(
      ".lightbox #lightbox-image",
    );

    lightboxSelector.style.display = "flex";
    lightboxImageSelector.setAttribute(
      "src",
      event.target.src.split(".jpg")[0].slice(0, -10) + ".jpg",
    );
  }),
);

buttonSelector.addEventListener(
  "click",
  () => (lightboxSelector.style.display = "none"),
);
lightboxSelector.addEventListener(
  "click",
  () => (lightboxSelector.style.display = "none"),
);
