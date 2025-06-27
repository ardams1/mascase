const container = document.getElementById("user-button-container");
const isLoggedIn = localStorage.getItem("isLoggedIn");
const email = localStorage.getItem("currentUserEmail");
const ad = localStorage.getItem("currentUserAd");

if (container) {
  if (isLoggedIn === "true" && ad) {
    container.innerHTML = `
      <div class="profile-menu" style="display: flex; align-items: center; gap: 10px; font-size: 24px;">
        <i class="ri-user-fill"></i>
        <span style="font-size: 14px; text-transform: uppercase; font-weight: 700;">${ad}</span>
        <button onclick="logout()" style="background: none; border: none; color: black; cursor: pointer; font-size: 24px"><i class="ri-logout-box-r-line"></i></button>
      </div>
    `;
  } else {
    // Dosya yolu farkını algılar ve doğru link verir
    const isInPages = window.location.pathname.includes('/pages/');
    const loginPath = isInPages ? 'login.html' : 'pages/login.html';
    container.innerHTML = `<a href="${loginPath}" class="login-btn"><i class="ri-user-line"></i></a>`;
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUserEmail");
  localStorage.removeItem("currentUserAd");
  location.reload(); // Sayfayı yenile
}
