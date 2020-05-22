window.sr = ScrollReveal();

sr.reveal('.navbar', {
  duration: 2000,
  origin: 'bottom'
});

sr.reveal('.carusel', {
  duration: 2000,
  origin: 'top',
  distance: '300px'
});

sr.reveal('.header-content-right', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});
sr.reveal('.content-left', {
    duration: 2000,
    distance: '0px',
    opacity: 0.2
});
sr.reveal('.formulario', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});
sr.reveal('#certificaciones', {
    duration: 2000,
    scale: 0.85
    // rotate: {
    //     x: 50,
    //     z: 50
    // }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});