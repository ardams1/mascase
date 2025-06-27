// --- MOBİL MENÜ FONKSİYONU ---
// Gerekli HTML elemanlarını seçiyoruz
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Menü ikonuna tıklandığında çalışacak fonksiyon
menu.onclick = () => {
    // Menü ikonunu hamburger (☰) ve çarpı (X) arasında değiştirir
    menu.classList.toggle('bx-x');
    
    // Navigasyon listesini (menüyü) açıp kapatır
    navlist.classList.toggle('open'); 
};

// KULLANICI DENEYİMİ İÇİN EKSTRA: 
// Sayfayı aşağı kaydırınca açık olan mobil menüyü otomatik kapatır.
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};


// --- TÜM SAYFALAR İÇİN SCROLLREVEAL ANİMASYONLARI ---
// Sizin eklediğiniz tüm animasyonlar burada birleştirildi.
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

// Ana sayfa elemanları
sr.reveal('.phone-text', {delay:200, origin:'top'});
sr.reveal('.phone-img', {delay:400, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scroll-down', {delay:500, origin:'right'});

// Diğer sayfalardaki elemanlar
sr.reveal('.form-container', {delay:500, origin:'top'});
sr.reveal('.contact' , {delay:400, origin:'left'});
sr.reveal('.container' , {delay:500, origin:'top'});
sr.reveal('.product-grid' , {delay:100, origin:'top'});
sr.reveal('.product-card' , {delay:100, origin:'top'});