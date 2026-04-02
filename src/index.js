/* index.js */
import "./styles.css";
import { homeContent } from "./pages/home.js";
import { menuContent } from "./pages/menu.js";
import { aboutContent } from "./pages/about.js";

const mainContainer = document.querySelector(".content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

homeButton.classList.add("active");
mainContainer.appendChild(homeContent);

homeButton.addEventListener("click", () => {
    mainContainer.innerHTML = "";
    mainContainer.appendChild(homeContent);

    homeButton.classList.add("active");
    menuButton.classList.remove("active");
    aboutButton.classList.remove("active");
});

menuButton.addEventListener("click", () => {
    mainContainer.innerHTML = "";
    mainContainer.appendChild(menuContent);

    homeButton.classList.remove("active");
    menuButton.classList.add("active");
    aboutButton.classList.remove("active");
});

aboutButton.addEventListener("click", () => {
    mainContainer.innerHTML = "";
    mainContainer.appendChild(aboutContent);

    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    aboutButton.classList.add("active");
});