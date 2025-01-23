// Select the toggle image and menu elements
const toggleimage = document.getElementById('toggleimage');
const togglebar = document.getElementById('togglebar');

// Add a click event listener to toggle the display
toggleimage.addEventListener('click', () => {
    // Check the current display state and toggle it
    if (togglebar.style.display === 'none' || togglebar.style.display === '') {
        togglebar.style.display = 'block'; // Show the menu
    } else {
        togglebar.style.display = 'none'; // Hide the menu
    }
});
