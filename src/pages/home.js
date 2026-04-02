/* Home page */
import "./home.css";

export const homeContent = (() => {
    const homePage = document.createElement("div");
    homePage.classList.add("home-page");

    const heroText = document.createElement("h1");
    heroText.classList.add("hero");
    heroText.textContent = "YOU SHOULD BE DRINKING WATER!";

    const subHero = document.createElement("p");
    subHero.classList.add("sub-hero")
    subHero.textContent = "Water is everywhere, but we forget sometimes that we can also consume it. It regulates all our bodily funtionality and keeps us healthy and ALIVE!. you should be drinking 'sufficient' amount of water everyday. sufficient here means when you feel like drinking water then DRINK WATER.";
    const link = document.createElement("a");
    link.textContent = "To learn more."
    link.href = "https://www.cdc.gov/healthy-weight-growth/water-healthy-drinks/index.html";
    link.target = "_blank";

    homePage.appendChild(heroText);
    homePage.appendChild(subHero);
    homePage.appendChild(link);

    return homePage;

})();

