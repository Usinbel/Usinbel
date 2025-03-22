document.addEventListener("DOMContentLoaded", function () {
    const bookNowBtn = document.getElementById("book-now");
    const modal = document.getElementById("calendly-modal");
    const closeModal = document.getElementById("close-modal");
    const overlay = document.getElementById("overlay");

    // Open Modal when Book Now is clicked
    bookNowBtn.addEventListener("click", function () {
        modal.classList.add("active");
        overlay.classList.add("active");
    });

    // Close Modal when X button or overlay is clicked
    closeModal.addEventListener("click", function () {
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", function () {
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});
