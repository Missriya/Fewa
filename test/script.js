// Get the heart and modal elements
const heart = document.getElementById("heart");
const modal = document.getElementById("modal");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
    heart.removeEventListener("click", openModal);
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    heart.addEventListener("click", openModal);
}

// Event listener to close the modal when the close button is clicked
document.getElementById("close").addEventListener("click", closeModal);

// Event listener to close the modal when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

// Initially, the modal is closed
closeModal();
