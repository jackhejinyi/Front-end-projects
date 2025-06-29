const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const imagesText = {
    pic1: "eye",
    pic2: "stone",
    pic3: "flower",
    pic4: "paiting",
    pic5: "butterfly",
}

/* Looping through images */
for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement("img");
    const picName = `pic${i+1}`;
    newImage.setAttribute("src", `images\\${picName}.jpg`);
    newImage.setAttribute("alt", `${imagesText[picName]}`);
    
    newImage.addEventListener("click", () => {
        displayedImage.setAttribute("src", `images\\${picName}.jpg`);
        displayedImage.setAttribute("alt", `${imagesText[picName]}`);
    });
    
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
// btn.addEventListener("click", () => {
//     // const fullImage = document.querySelector(".full-img");
//     // overlay.classList.add("overlay");
//     if (overlay.style.backgroundColor === "rgba(0, 0, 0, 0)") {
//         overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
//         btn.textContent = "Lighten";
//     }
// });
btn.addEventListener("click", () => {
    if (btn.classList.contains("dark")) {
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        btn.textContent = "Lighten";
        btn.classList.remove("dark");
        btn.classList.add("light");
    } else {
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
        btn.textContent = "Darken";
        btn.classList.remove("light");
        btn.classList.add("dark");
    }
});
