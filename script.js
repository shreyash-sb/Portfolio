// Typing effect
const textArray = ["Developer", "Programmer", "Web Designer","Softwear Engineer","AI Engineer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");

    if (index < textArray.length) {
        if (!isDeleting && charIndex <= textArray[index].length) {
            currentText = textArray[index].substring(0, charIndex++);
        } else if (isDeleting && charIndex >= 0) {
            currentText = textArray[index].substring(0, charIndex--);
        }

        typing.textContent = currentText;

        if (charIndex === textArray[index].length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }

        if (charIndex === 0) {
            isDeleting = false;
            index++;
            if (index === textArray.length) index = 0;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});