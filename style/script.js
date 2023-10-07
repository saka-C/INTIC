const hamburger = document.getElementById("hamburger");
const view = document.getElementById("view-ticket");
const closeBtn = document.getElementById("close-view-popup");
const sidebar = document.querySelector(".sidebar");
const hamburgerBtn = document.querySelector(".hamburger");
const container = document.querySelector(".container");
const viewPopup = document.querySelector(".view-popup");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
hamburger.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
});
hamburger.addEventListener("click", () => {
    container.classList.toggle("active");
});

view.addEventListener("click", () => {
    viewPopup.classList.add("active");
});

closeBtn.addEventListener("click",() =>{
    viewPopup.classList.remove("active");
});


