window.addEventListener("load", function () {
  // 비주얼 스와퍼
  const visualSwiper = new Swiper(".visualSwiper", {
    // new 뒤에는 무조건 대문자로 시작한다.
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const itemSwiper = new Swiper(".itemSwiper", {
    // slidesPerView: 5,
    slidesPerView: 1.5,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        590: {
            slidesPerView: 2.5
        },
        768: {
            slidesPerView: 3.5
        },
        1200: {
            slidesPerView: 4.5
        },
    },
  });
});
