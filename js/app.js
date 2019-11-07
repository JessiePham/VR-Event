const sr = ScrollReveal();

sr.reveal(".speaker", {
  delay: 150,
  // reset: true,
  opacity: 0,
  scale: 0.9,
  origin: "bottom",
  duration: 500
  // viewFactor: 0.2
  /*  viewOffset: {
    top: 0,
    bottom: 0
  } */
});

sr.reveal(".demo", {
  delay: 150,
  // reset: true,
  opacity: 0,
  scale: 0.75,
  duration: 500,
  easing: "ease-in",
  viewFactor: 0.2
});

sr.reveal("h2", {
  // delay: 150,
  // reset: true,
  opacity: 0,
  scale: 0.75,
  duration: 500,
  viewFactor: 0.5
});

sr.reveal("h3", {
  delay: 100,
  // reset: true,
  opacity: 0,
  scale: 0.75,
  duration: 500
  // viewFactor: 0.5
});

sr.reveal("p", {
  delay: 150,
  // reset: true,
  opacity: 0,
  scale: 0.75,
  duration: 500,
  viewFactor: 0.5
});
