document.addEventListener("DOMContentLoaded", function() {
    // close sidebar when a link on click
    const sideNavbar = document.getElementById("sideNavbar");
    const offcanvas = new bootstrap.Offcanvas(sideNavbar);
    const offcanvasLinks = document.querySelectorAll(".offcanvas-link");

    for (const link of offcanvasLinks) {
        link.addEventListener("click", () => {
            offcanvas.hide();
        });
    }
    // setup option for swiper carousel
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
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });
    
    // Ambil elemen button prev dan next
    const prevElement = document.querySelector(".prev-button");
    const nextElement = document.querySelector(".next-button");
    
    // untuk user desktop jika mouse di atas element ubah class nya
    // Tambahkan event listener untuk prev button
    // jika mouse berada di atas element button
    prevElement.addEventListener("mouseover", function() {
        // Mengubah warna latar belakang button sesuai dengan class
        prevElement.classList.remove("prev-button");
        prevElement.classList.add("next-button");
    
        nextElement.classList.remove("next-button");
        nextElement.classList.add("prev-button")
    });
    
    // Tambahkan event listener untuk prev button
    // jika mouse udah tidak diatas element button 
    prevElement.addEventListener("mouseout", function() {
        // Mengubah warna latar belakang button sesuai dengan class
        prevElement.classList.remove("next-button");
        prevElement.classList.add("prev-button");
    
        nextElement.classList.remove("prev-button");
        nextElement.classList.add("next-button")
    });
    
    // untuk user mobile jika di klik maka ubah class element nya
    // Tambahkan event listener untuk prev button
    prevElement.addEventListener("click", function() {
        // Mengubah warna latar belakang button sesuai dengan class
        prevElement.classList.remove("prev-button");
        prevElement.classList.add("next-button");
    
        nextElement.classList.remove("next-button");
        nextElement.classList.add("prev-button")
    });
    
    // Tambahkan event listener untuk next button
    nextElement.addEventListener("click", function() {
        // Mengubah warna latar belakang button sesuai dengan class
        prevElement.classList.remove("next-button");
        prevElement.classList.add("prev-button");
    
        nextElement.classList.remove("prev-button");
        nextElement.classList.add("next-button")
    });
});