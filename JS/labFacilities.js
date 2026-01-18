// Bootstrap handles auto sliding by default
// You can control global carousel behavior here if needed

document.querySelectorAll('.carousel').forEach(carousel => {
  new bootstrap.Carousel(carousel, {
    interval: 2500,
    ride: 'carousel',
    pause: false,
    wrap: true
  });
});
