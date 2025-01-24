function updateHomeModel() {
    const selector = document.getElementById('homeModelSelector');
    const homeImage = document.getElementById('homeImage');
    const selectedModel = selector.value;

    // Change the image source based on selected model
    homeImage.src = `images/${selectedModel}.jpg`;
    homeImage.alt = selectedModel;
}

function changeColor(color) {
    const homeImage = document.getElementById('homeImage');

    // Apply a color overlay using CSS filters
    homeImage.style.filter = `sepia(1) saturate(10) hue-rotate(${getHueRotation(color)}deg)`;
}

// Helper function to calculate hue rotation based on color
function getHueRotation(color) {
    const colors = {
        '#FF5733': 0,     // Red
        '#33FF57': 120,   // Green
        '#3357FF': 240,   // Blue
        '#F1C40F': 60,    // Yellow
        '#8E44AD': 300    // Purple
    };
    return colors[color] || 0;
}







function generateHome(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const door = document.getElementById("door").value;
    const furniture = document.getElementById("furniture").value;
    const windows = document.getElementById("windows").value;

    // Update the preview elements
    document.getElementById("doorPreview").textContent = `Door: ${capitalize(door)}`;
    document.getElementById("furniturePreview").textContent = `Furniture: ${capitalize(furniture)}`;
    document.getElementById("windowsPreview").textContent = `Windows: ${capitalize(windows)}`;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}




















// Navigate to a specific page
function navigateTo(page) {
    window.location.href = page;
}

// Add some interaction on page load
window.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".expert-btn");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            button.style.backgroundColor = "#2e7d32";
        });
    });
});
