document.getElementById('year').textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 750) {
        document.querySelector(".menu").classList.remove("hide")
        document.querySelector(".menu-button").classList.add("hide");
    }
    else {
        document.querySelector(".menu").classList.add("hide");
        document.querySelector(".menu-button").classList.remove("hide")
    }
}
window.addEventListener("resize", handleResize)
window.addEventListener("load", handleResize)

function viewerTemplate(image, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${image}" alt="${alt}" class="viewer-image">
</div>`;
}

function viewHandler(event) {
    const element = event.target;
    const image = element.target.src.split("-");
    const imgSrc = image[0] + "-full.jpeg";
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, target.alt));

    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}
document.querySelector(".close-viewer").addEventListener("click", closeViewer);

function closeViewer() {
    document.querySelector(".viewer")?.remove();
}

document.querySelectorAll(img).addEventListener("click", viewHandler);

