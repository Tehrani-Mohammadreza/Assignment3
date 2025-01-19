
// Select the hamburger icon and navigation links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle menu visibility on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Add or remove 'show' class
});

// Optional: Close the menu when a link is clicked
navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('show');
  }
});

// Select the form and confirmation message
const contactForm = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');

// Add an event listener to handle form submission
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from reloading the page

  // Hide the form
  contactForm.style.display = 'none';

  // Show the confirmation message
  confirmationMessage.style.display = 'block';

  // Optionally, you can reset the form after submission
  contactForm.reset();
});