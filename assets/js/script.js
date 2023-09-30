const swiper = new Swiper(".carousel", {
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    navigation: {
        prevEl: ".prev-button",
        nextEl: ".next-button",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});