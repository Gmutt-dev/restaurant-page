import imgHappyPuppy from "./img/happy-puppy.jpg";

export default function displayMain() {
    
    const img = document.createElement("img");
    img.src = imgHappyPuppy;
    img.classList.add("happy-puppy-pic")

    const h1 = document.createElement("h1");
    h1.innerHTML = "KIBBLES 'n <span>KISSES</span><br>Doggie Restaurant";

    const intro = document.createElement("p");
    intro.textContent = "The finest delicatessen for canine palates.";
    
    // Create new div element
    const div = document.createElement("div");
    div.classList.add("generated-container");
    // Add created elements to the new div as children
    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(intro);

    // Get the container div on template.html page
    const container = document.querySelector("div#content");
    // Append new div to template.html
    container.appendChild(div);
}