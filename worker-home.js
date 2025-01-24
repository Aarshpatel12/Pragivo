// Toggle the "Interested" button state and add a small animation
function toggleInterest(button) {
    button.classList.toggle("interested");
    button.textContent = button.classList.contains("interested") ? "Interested ✔" : "Interested";
}

// Function to add comments to the post
function addComment(button) {
    const commentSection = button.parentElement;
    const commentInput = commentSection.querySelector(".comment-input");
    const commentsList = commentSection.nextElementSibling;

    if (commentInput.value.trim() !== "") {
        const newComment = document.createElement("li");
        newComment.className = "comment fade-in";
        newComment.innerHTML = `<b>You:</b> ${commentInput.value.trim()}`;
        commentsList.appendChild(newComment);
        commentInput.value = "";  // Clear the input field after posting
    }
}
