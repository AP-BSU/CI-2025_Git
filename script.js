const menuButton = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');
const overlayLinks = document.querySelectorAll('.overlay-menu a');
const header = document.querySelector('header'); // Select the header for hiding/showing
let timeout;

// Ensure Overlay Starts Hidden
overlay.style.display = "none";

// Show Overlay when Menu Button is Clicked
menuButton.addEventListener('click', () => {
    overlay.style.display = overlay.style.display === "flex" ? "none" : "flex";
});

// Hide Overlay when Any Link is Clicked
overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
        overlay.style.display = "none";
    });
});

// Automatically Hide Overlay on Window Resize (Back to Desktop)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        overlay.style.display = "none";
    }
});

// Function to Hide Navbar
function hideNavbar() {
    header.classList.add('hidden'); // Add the 'hidden' class to hide the header
}

// Function to Show Navbar
function showNavbar() {
    header.classList.remove('hidden'); // Remove the 'hidden' class to show the header
    clearTimeout(timeout); // Clear any existing timeout
    timeout = setTimeout(hideNavbar, 5000); // Set a timeout to hide the navbar after 5 seconds
}

// Show Navbar on User Interaction
document.addEventListener('mousemove', showNavbar); // Show navbar on mouse movement
document.addEventListener('scroll', showNavbar); // Show navbar on scroll

// Initial Timeout to Hide Navbar
timeout = setTimeout(hideNavbar, 5000);