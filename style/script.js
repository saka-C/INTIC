const hamburger = document.getElementById("hamburger");
const view = document.getElementById("view-ticket");

const closeBtn = document.getElementById("close-view-popup");

const sidebar = document.querySelector(".sidebar");
const hamburgerBtn = document.querySelector(".hamburger");
const container = document.querySelector(".container");
const viewPopup = document.querySelector(".view-popup");
const reportPopup = document.querySelector(".report-card-popup");

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


// preview post
function tampilkanPreview() {
    const inputFoto = document.getElementById("inp-foto");
    const labelPlus = document.getElementById("label-plus");
    const previewContainer = document.getElementById("preview-container");
    const previewImage = document.getElementById("preview-image");
    if (inputFoto.files && inputFoto.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewContainer.style.display = "block";
        labelPlus.style.display = "none";

        // Menambahkan event listener pada gambar
        previewImage.addEventListener("click", function() {
          inputFoto.value = ""; // Mengatur ulang input file
          previewContainer.style.display = "none";
          labelPlus.style.display = "block";
        });
      };

      reader.readAsDataURL(inputFoto.files[0]);
    }
  }


