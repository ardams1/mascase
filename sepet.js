document.addEventListener('DOMContentLoaded', () => {
  // Sepetteki ürünleri localStorage'dan al, yoksa boş dizi
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // DOM elemanları
  const cartItemsEl = document.getElementById('cart-items');
  const subtotalPriceEl = document.getElementById('subtotal-price');
  const discountAmountEl = document.getElementById('discount-amount');
  const totalPriceEl = document.getElementById('total-price');
  const couponCodeInput = document.getElementById('coupon-code');
  const applyCouponBtn = document.getElementById('apply-coupon-btn');
  const couponMessage = document.getElementById('coupon-message');
  const checkoutBtn = document.getElementById('checkout-btn');

  // İndirim tutarı başlangıçta 0
  let discountAmount = 0;

  // Sepeti ekrana basan fonksiyon
  function renderCart() {
    if (!cartItemsEl) return;

    cartItemsEl.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
      subtotal += item.price * item.quantity;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';

      itemEl.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div class="item-info">
          <h3>${item.name}</h3>
          <div class="item-price">${item.price.toFixed(2)} ₺</div>
        </div>
        <div class="quantity-control">
          <button class="qty-btn" data-id="${item.id}" data-action="decrease">−</button>
          <input type="number" min="1" value="${item.quantity}" data-id="${item.id}" class="qty-input" />
          <button class="qty-btn" data-id="${item.id}" data-action="increase">+</button>
        </div>
        <div class="item-total">${(item.price * item.quantity).toFixed(2)} ₺</div>
        <button class="remove-btn" data-id="${item.id}" title="Ürünü kaldır">×</button>
      `;

      cartItemsEl.appendChild(itemEl);
    });

    // Fiyat bilgilerini güncelle
    if (subtotalPriceEl) subtotalPriceEl.textContent = subtotal.toFixed(2);
    if (discountAmountEl) discountAmountEl.textContent = discountAmount.toFixed(2);
    if (totalPriceEl) totalPriceEl.textContent = (subtotal - discountAmount).toFixed(2);

    // Güncel cart'ı localStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Ürün adet arttırma/azaltma ve input değişikliği
  if (cartItemsEl) {
    cartItemsEl.addEventListener('click', e => {
      if (e.target.classList.contains('qty-btn')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        const action = e.target.getAttribute('data-action');
        const product = cart.find(item => item.id === id);
        if (!product) return;

        if (action === 'increase') {
          product.quantity++;
        } else if (action === 'decrease' && product.quantity > 1) {
          product.quantity--;
        }
        renderCart();
      }

      if (e.target.classList.contains('remove-btn')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        cart = cart.filter(item => item.id !== id);
        renderCart();
      }
    });

    cartItemsEl.addEventListener('input', e => {
      if (e.target.classList.contains('qty-input')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        let value = parseInt(e.target.value);
        if (isNaN(value) || value < 1) value = 1;
        const product = cart.find(item => item.id === id);
        if (product) {
          product.quantity = value;
          renderCart();
        }
      }
    });
  }

  // Kuponlar (anahtar: kupon kodu, değer: indirim oranı)
  const coupons = {
    'INDIRIM10': 0.10,
    'BAYRAM20': 0.20
  };

  // Kupon uygulama
  if (applyCouponBtn && couponCodeInput && couponMessage) {
    applyCouponBtn.addEventListener('click', () => {
      const code = couponCodeInput.value.trim().toUpperCase();

      if (!code) {
        couponMessage.textContent = 'Lütfen bir kupon kodu girin.';
        couponMessage.style.color = '#e63946';
        discountAmount = 0;
        renderCart();
        return;
      }

      if (coupons.hasOwnProperty(code)) {
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        discountAmount = subtotal * coupons[code];
        couponMessage.textContent = `Kupon başarıyla uygulandı: %${coupons[code] * 100} indirim!`;
        couponMessage.style.color = '#28a745';
      } else {
        discountAmount = 0;
        couponMessage.textContent = 'Geçersiz kupon kodu.';
        couponMessage.style.color = '#e63946';
      }

      renderCart();
    });
  }

  // Ödeme butonu işlemi
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Sepetiniz boş.');
        return;
      }
      alert('Ödeme sayfasına gidiliyor...');
      // Buraya ödeme sayfasına yönlendirme kodu ekleyebilirsin
    });
  }

  // Sayfa yüklendiğinde sepeti göster
  renderCart();
});
