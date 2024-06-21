const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

sr.reveal('.main-title, .section-title', { delay: 1000, origin: 'left'});
sr.reveal('.info-title, p', { delay: 500, origin: 'left'});
sr.reveal('.sec-01, .image', { delay: 600, origin: 'bottom'});
sr.reveal('.text-box', { delay: 700, origin: 'right'});
sr.reveal('.media-icons i', { delay: 500, origin: 'bottom', interval:200});
sr.reveal('.media-info li', { delay: 500, origin: 'left', interval:200});
