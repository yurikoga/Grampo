const swiper = new Swiper(".mySwiper", {
    // Efeito de transição suave
    speed: 800,
    loop: true,
    grabCursor: true,
    
    // Configuração da paginação
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    // Autoplay opcional
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    // Teclado e Mousewheel
    keyboard: {
        enabled: true,
    },
});
