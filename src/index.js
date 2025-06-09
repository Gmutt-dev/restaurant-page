import "./styles.css";
import displayMain from "./main.js";
import displayMenu from "./menu.js";
import displayAbout from "./about.js";

const nav = document.querySelector("nav");
nav.addEventListener("click", e => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    const navButtons = document.querySelectorAll("nav > button");
    navButtons.forEach(button => button.classList.remove("selected-button"));
    e.target.classList.add("selected-button");
    switch (e.target.id) {
        case "nav-home":
            displayMain();
            break;
        case "nav-menu":
            displayMenu();
            break;
        case "nav-about":
            displayAbout();
            break;
    }
})