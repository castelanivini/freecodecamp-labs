const textAreaSelector = document.querySelector("#text-input");
const charCountSelector = document.querySelector("#char-count");

textAreaSelector.addEventListener("input", (event) => {
  const textArea = event.target;

  if (textArea.value.length >= 50) {
    textArea.value = textArea.value.slice(0, 50);
  }

  const charCount = textArea.value.length;

  charCountSelector.textContent = `Character Count: ${charCount}/50`;

  if (charCount === 50) {
    charCountSelector.classList.add("block-text");
  } else {
    charCountSelector.classList.remove("block-text");
  }
});
