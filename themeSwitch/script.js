const themes = [
  { name: "light", message: "Theme color setted to light" },
  { name: "dark", message: "Theme color setted to dark" },
  { name: "blue", message: "Theme color setted to blue" },
  { name: "green", message: "Theme color setted to green" },
];

const buttonSelector = document.querySelector("#theme-switcher-button");
const themeDropdownSelector = document.querySelector("#theme-dropdown");
const liveRegionSelector = document.querySelector("#theme-status");

buttonSelector.addEventListener("click", (evt) => {
  const isHidden = themeDropdownSelector.hidden;
  themeDropdownSelector.toggleAttribute("hidden", !isHidden);
  buttonSelector.setAttribute("aria-expanded", String(isHidden));
});

themeDropdownSelector.addEventListener("click", (event) => {
  const selectedItem = event.target
    .closest('[role="menuitem"]')
    .textContent.toLowerCase();
  const selectedTheme = themes.find((theme) => theme.name === selectedItem);
  const isHidden = themeDropdownSelector.hidden;

  document.body.className = `theme-${selectedTheme.name.toLowerCase()}`;
  liveRegionSelector.textContent = selectedTheme.message;

  themeDropdownSelector.toggleAttribute("hidden", !isHidden);
  buttonSelector.setAttribute("aria-expanded", "false");
});
