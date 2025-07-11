document.addEventListener("DOMContentLoaded", () => {
  const userContainer = document.getElementById("user-container");
  const userName = localStorage.getItem("userName");

  if (!userContainer) return;

  if (userName) {
    userContainer.innerHTML = `
      <div class="user-container" style="position: relative; display: flex; align-items: center; cursor: pointer; gap: 5px;">
        <i class="ri-user-line user-icon" style="font-size: 24px;"></i>
        <span class="user-name" style="font-weight: 600;">${userName}</span>
        <div class="user-dropdown" style="display: none; position: absolute; top: 40px; right: 0; background: white; border: 1px solid #ddd; padding: 10px; border-radius: 5px; box-shadow: 0 0 8px rgba(0,0,0,0.1); min-width: 150px; z-index: 2000;">
          <p style="margin: 0 0 8px 0;">${userName}</p>
          <a href="#" class="account-info" style="display: block; margin-bottom: 5px;">Hesap Bilgileri</a>
          <a href="#" class="logout" style="display: block;">Çıkış Yap</a>
        </div>
      </div>
    `;

    const userDiv = userContainer.querySelector(".user-container");
    const dropdown = userContainer.querySelector(".user-dropdown");
    const logoutBtn = userContainer.querySelector(".logout");

    userDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", () => {
      dropdown.style.display = "none";
    });

    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // LocalStorage’dan kullanıcı bilgilerini temizle
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      // Sayfayı yenileyerek görünümü güncelle
      location.reload();
    });
  } else {
    // Kullanıcı yoksa sadece ikon göster
    userContainer.innerHTML = `<i class="ri-user-line" style="font-size: 24px;"></i>`;
  }
});
