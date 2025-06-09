export default function displayAbout() {

    const h1 = document.createElement("h1");
    h1.textContent = "About";

    const aboutSection = document.createElement("p");
    aboutSection.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    // Create new div element
    const div = document.createElement("div");
    div.classList.add("generated-container");
    // Add created elements to the new div as children
    div.appendChild(aboutSection);

    // Get the container div on template.html page
    const container = document.querySelector("div#content");
    // Append new div to template.html
    container.appendChild(div);
}