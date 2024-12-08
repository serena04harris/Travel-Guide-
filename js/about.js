// Add a little interactivity just for fun
document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector('.hero-text h1');

    heroText.addEventListener('mouseover', () => {
        heroText.style.color = '#ffcc66';
    });

    heroText.addEventListener('mouseout', () => {
        heroText.style.color = '#004d66';
    });
});
