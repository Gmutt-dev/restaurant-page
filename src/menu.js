export default function displayMenu() {

    const h1 = document.createElement("h1");
    h1.textContent = "Menu";

    const item1 = document.createElement("div");
    item1.textContent = "Menu item one";
    item1.id = "menu-item";
    const item1Description = document.createElement("p");
    item1Description.textContent = "Item description";
    item1.appendChild(item1Description);

    const item2 = document.createElement("div");
    item2.textContent = "Menu item two";
    item2.id = "menu-item";
    const item2Description = document.createElement("p");
    item2Description.textContent = "Item description";
    item2.appendChild(item2Description);

    // Create new div element
    const div = document.createElement("div");
    div.classList.add("generated-container");
    // Add created elements to the new div as children
    div.appendChild(h1);
    div.appendChild(item1);
    div.appendChild(item2);

    // Get the container div on template.html page
    const container = document.querySelector("div#content");
    // Append new div to template.html
    container.appendChild(div);
}