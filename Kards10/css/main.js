// Function to toggle the visibility of the popup
function togglePopup() {
    var popup = document.querySelector('.popup-modal');
    
    // Check the current display property
    if (popup.style.display === 'none' || popup.style.display === '') {
        // If it's hidden, show the popup
        popup.style.display = 'block';
        // Add the blur class to the background content
        document.body.classList.add('blur-background');
    } else {
        // If it's visible, hide the popup
        popup.style.display = 'none';
        // Remove the blur class from the background content
        document.body.classList.remove('blur-background');
    }
}

// Show the popup when the window loads
window.onload = function() {
    togglePopup();
};
