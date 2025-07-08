document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCountEl = document.getElementById("cart-count");

  if (cartCountEl) {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.innerText = totalCount;
  }
});
