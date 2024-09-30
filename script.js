// We have implemented the scrolling effect with CSS animations (scrolling the gallery from right to left)
const gallery = document.querySelector('.work-gallery');

// Optional: Add interactivity to pause scrolling when hovering over the gallery
gallery.addEventListener('mouseenter', () => {
    gallery.style.animationPlayState = 'paused';
});

gallery.addEventListener('mouseleave', () => {
    gallery.style.animationPlayState = 'running';
});
