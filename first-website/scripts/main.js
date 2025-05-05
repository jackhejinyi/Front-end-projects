const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/google-icon.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        // ` rather than '
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
} else{
    const storeName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storeName}`;
}

myButton.addEventListener("click", () => {setUserName();});