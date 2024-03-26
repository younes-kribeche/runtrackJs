let footer = document.getElementById("footer");

function ScrollChangeColor() {
    let scrollPosition = window.scrollY;
    let pageHeight = document.documentElement.scrollHeight;
    let windowHeight = window.innerHeight;
    let scrollPercentage = (scrollPosition / (pageHeight - windowHeight)) * 100;
    footer.style.background = "linear-gradient(to right, white, black " + scrollPercentage + "%)";
}

window.addEventListener("scroll", ScrollChangeColor)