const logoContainer = document.querySelector('.logo-container');
const navbar = document.querySelector('.navbar');
const overlay = document.getElementById('overlay');

logoContainer.addEventListener('click', () => {
  navbar.style.left = '0';
  overlay.style.display = 'block';
});

document.addEventListener('click', (event) => {
  const clickInsideNavbar = navbar.contains(event.target);
  const clickInsideLogoContainer = logoContainer.contains(event.target);
  
  if (!clickInsideNavbar && !clickInsideLogoContainer) {
    navbar.style.left = '-250px';
    overlay.style.display = 'none';
  }
});