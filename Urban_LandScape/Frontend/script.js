// Start of JavaScript
// Header Functions
const menuButton = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');
const overlayLinks = document.querySelectorAll('.overlay-menu a');
const header = document.querySelector('header');
let idleTimeout;

// Show Overlay when Settings Button is Clicked
menuButton.addEventListener('click', () => {
    overlay.classList.add('active');
});

// Hide Overlay when Any Section Link is Clicked
overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
});

// Hide Overlay Automatically on Window Resize (Back to Desktop)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        overlay.classList.remove('active');
    }
});

// --- Navbar Auto Hide on Idle ---
function hideNavbar() {
    header.classList.add('navbar-hidden');
}
function showNavbar() {
    header.classList.remove('navbar-hidden');
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(hideNavbar, 5000); // 5 seconds
}

// Show navbar on user activity
['mousemove', 'scroll', 'keydown', 'touchstart'].forEach(evt =>
    document.addEventListener(evt, showNavbar)
);

// Ensure timer starts after DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    showNavbar(); // Start the timer and show header on load
});

 // FAQ Functions
 // Prevent FAQ form submission (null output) (Edit Later after backend data platform is acquired and ready)
document.querySelector('.faq-form').addEventListener('submit', function(e) {
    e.preventDefault();
    }
);
