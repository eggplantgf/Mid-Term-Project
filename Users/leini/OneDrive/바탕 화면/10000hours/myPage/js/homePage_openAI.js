
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");



function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target == modal) {
        closeModal();
    }
};


openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
