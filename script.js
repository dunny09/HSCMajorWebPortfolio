function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  // Create and append the lightbox container once
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  // Select all images inside the Before/After table
  const images = document.querySelectorAll('.responsive-table img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      // Clear any existing content
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      // Create a clone of the clicked image for the lightbox
      const imgClone = document.createElement('img');
      imgClone.src = img.src;
      lightbox.appendChild(imgClone);
      // Show lightbox
      lightbox.classList.add('active');
    });
  });

  // Clicking outside the image closes the lightbox
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
});
