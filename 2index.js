// Function to handle navigation based on role selection
function navigateTo(page) {
    // Add a fade-out effect for smooth transition
    const container = document.querySelector('.container');
    container.style.opacity = '0';  // Start fading out

    setTimeout(() => {
        window.location.href = page;  // Redirect after fade-out
    }, 300);  // Wait for fade-out effect to complete
}
