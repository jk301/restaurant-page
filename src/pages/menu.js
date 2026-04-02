/* Menu page */
import "./menu.css"
import lemonade from "../img/lemonade.jpg"
import just_water from "../img/just-water.jpg"
import chill_water from "../img/chill-water.jpg"
import excited_water from "../img/water-splashing-from-glass.jpg"

function card(imgsrc, title, text) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    const cardImg = document.createElement("img");
    cardImg.src = imgsrc;
    const cardTitle = document.createElement("h2")
    cardTitle.textContent = title;
    const cardText = document.createElement("p")
    cardText.textContent = text;

    cardContainer.appendChild(cardImg);
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardText);

    return cardContainer;
}

export const menuContent = (() => {
    const menu = document.createElement("div");
    menu.classList.add("menu-div");

    const card1 = card(just_water, "Plain water", "Very relaxed and friendly water.");
    const card2 = card(excited_water, "Excited water", "The water is excited to see you, drinking this won't harm you");
    const card3 = card(chill_water, "Chill water", "This is chilled water, it feels very good to drink after a hot day (or during) too much can result in negative effects on health")
    const card4 = card(lemonade, "Lemonade", "Lemonade, its tastes very good (vouch), especially cold oh (probably the best one here tbh).");

    menu.appendChild(card1);
    menu.appendChild(card2);
    menu.appendChild(card3);
    menu.appendChild(card4);

    return menu;
})();