/* About page */
import "./about.css"

export const aboutContent = (() => {
    const about = document.createElement("div");
    about.classList.add("about-div");

    const name = document.createElement("p");
    name.textContent = "Name - WATER";
    const sciname = document.createElement("p");
    sciname.textContent = "Scientific name - dihydrogen monoxide (H₂O)";
    const text = document.createElement("p");
    text.textContent = "I come in different forms and i exist in '`most`' of the planet (earth)";

    about.appendChild(name);
    about.appendChild(sciname);
    about.appendChild(text);

    return about;
})();