/**
 * Theme Toggle
 * Sets the default theme based on the system theme
 * Changes the image theme
 * Adds a toggle (bottom right) to change theme
 */

// Function to set the set the theme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;

  if (themeName == "theme-dark") {
    theme.firstElementChild.className = "far fa-moon";
  } else {
    theme.firstElementChild.className = "far fa-sun";
  }
}
// Function to toggle between themes
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

const theme = document.querySelector(".theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
if (systemTheme.matches)
  // set to dark theme
  setTheme("theme-dark");
//set to light theme
else setTheme("theme-light");
theme.addEventListener("click", () => {
	const currTheme = theme.firstElementChild.className;
	const isDark = currTheme == "far fa-moon";
	toggleTheme();
});
