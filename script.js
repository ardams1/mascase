// --- MOBİL MENÜ FONKSİYONU ---
// Gerekli HTML elemanlarını seçiyoruz
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Menü ikonuna tıklandığında menüyü aç/kapat
menu.onclick = () => {
    menu.classList.toggle('bx-x');        // Hamburger ikonunu X yap
    navlist.classList.toggle('open');     // Menü listesini aç/kapat
};

// Sayfa kaydırıldığında menüyü otomatik kapat
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};


// --- SCROLL REVEAL ANİMASYONLARI ---
// ScrollReveal varsa, animasyonları uygula
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: true
    });

    // Ana sayfa animasyonları
    sr.reveal('.phone-text', { delay: 200, origin: 'top' });
    sr.reveal('.phone-img', { delay: 400, origin: 'top' });
    sr.reveal('.icons', { delay: 500, origin: 'left' });
    sr.reveal('.scroll-down', { delay: 500, origin: 'right' });

    // Diğer sayfalar
    sr.reveal('.form-container', { delay: 500, origin: 'top' });
    sr.reveal('.contact', { delay: 400, origin: 'left' });
    sr.reveal('.container', { delay: 500, origin: 'top' });
    sr.reveal('.product-grid', { delay: 100, origin: 'top' });
    sr.reveal('.product-card', { delay: 100, origin: 'top' });
    sr.reveal('#main-video', { delay: 300, origin: 'left' });
}
