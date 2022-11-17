var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 30,
      depth: 1200,
      modifier: 0.7,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });