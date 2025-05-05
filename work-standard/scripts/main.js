const spans = document.querySelectorAll("span");
spans.forEach((span) => {
const reversedText = span.textContent.split("").reverse().join("");
span.textContent = reversedText;
});