// Modal logic
// Hapus semua logic loginBtn, loginForm, registerForm, session, localStorage login/register dari file ini
// Script.js hanya untuk logic UI/UX (modal, animasi, dsb)

// Animate features on scroll
const features = document.querySelectorAll('.feature[data-animate]');
function animateOnScroll() {
  const trigger = window.innerHeight * 0.85;
  features.forEach(f => {
    const rect = f.getBoundingClientRect();
    if (rect.top < trigger) {
      f.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Navbar shrink on scroll (bonus)
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});

// --- NOTIFICATION ---
function showNotification(msg, type = 'success') {
  const notif = document.getElementById('notification');
  if (!notif) return;
  notif.textContent = msg;
  notif.className = 'notification notification-' + type;
  notif.style.display = 'flex';
  setTimeout(() => notif.classList.add('show'), 10);
  setTimeout(() => {
    notif.classList.remove('show');
    setTimeout(() => notif.style.display = 'none', 400);
  }, 2500);
}

window.initAuthModals = function({ loginBtnId = 'loginBtn', logoutBtnId = 'logoutBtn', loginModalId = 'loginModal', registerModalId = 'registerModal', notificationId = 'notification', loginFormId = 'loginForm', registerFormId = 'registerForm', toRegisterId = 'toRegister', toLoginId = 'toLogin' } = {}) {
  // Pastikan Firebase sudah di-load di halaman
  if (typeof firebase === 'undefined' || !firebase.auth) return;
  const auth = firebase.auth();
  const loginBtn = document.getElementById(loginBtnId);
  const logoutBtn = document.getElementById(logoutBtnId);
  const loginModal = document.getElementById(loginModalId);
  const registerModal = document.getElementById(registerModalId);
  const closeLogin = loginModal ? loginModal.querySelector('.close') : null;
  const closeRegister = registerModal ? registerModal.querySelector('.close') : null;
  const toRegister = document.getElementById(toRegisterId);
  const toLogin = document.getElementById(toLoginId);
  const loginForm = document.getElementById(loginFormId);
  const registerForm = document.getElementById(registerFormId);
  const notification = document.getElementById(notificationId);

  // Show/hide modal
  if (loginBtn) loginBtn.onclick = () => { loginModal.classList.add('show'); };
  if (closeLogin) closeLogin.onclick = () => { loginModal.classList.remove('show'); };
  if (toRegister) toRegister.onclick = (e) => { e.preventDefault(); loginModal.classList.remove('show'); registerModal.classList.add('show'); };
  if (closeRegister) closeRegister.onclick = () => { registerModal.classList.remove('show'); };
  if (toLogin) toLogin.onclick = (e) => { e.preventDefault(); registerModal.classList.remove('show'); loginModal.classList.add('show'); };
  window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.classList.remove('show');
    if (e.target === registerModal) registerModal.classList.remove('show');
  });

  // Notifikasi
  function showNotif(msg, type = 'success') {
    if (!notification) return;
    notification.textContent = msg;
    notification.className = 'notification notification-' + type;
    notification.style.display = 'flex';
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.style.display = 'none', 400);
    }, 2500);
  }

  // Update tombol login/logout
  function updateAuthButtons(user) {
    if (loginBtn) loginBtn.style.display = user ? 'none' : 'inline-block';
    if (logoutBtn) logoutBtn.style.display = user ? 'inline-block' : 'none';
  }

  // Firebase Auth listener
  auth.onAuthStateChanged(function(user) {
    updateAuthButtons(user);
  });

  // Register
  if (registerForm) registerForm.onsubmit = async function(e) {
    e.preventDefault();
    const name = registerForm.querySelector('input[type="text"]')?.value;
    const email = registerForm.querySelector('input[type="email"]')?.value;
    const password = registerForm.querySelector('input[type="password"]')?.value;
    try {
      const cred = await auth.createUserWithEmailAndPassword(email, password);
      await cred.user.updateProfile({ displayName: name });
      showNotif('Registrasi berhasil! Silakan login.', 'success');
      registerModal.classList.remove('show');
      loginModal.classList.add('show');
      registerForm.reset();
    } catch (err) {
      showNotif(err.message, 'error');
    }
  };

  // Login
  if (loginForm) loginForm.onsubmit = async function(e) {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]')?.value;
    const password = loginForm.querySelector('input[type="password"]')?.value;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      showNotif('Login berhasil!', 'success');
      loginModal.classList.remove('show');
      loginForm.reset();
      // Redirect ke shop.html setelah login sukses
      window.location.href = 'shop.html';
    } catch (err) {
      showNotif('Login gagal: ' + err.message, 'error');
    }
  };

  // Logout
  if (logoutBtn) logoutBtn.onclick = async function() {
    await auth.signOut();
    showNotif('Logout berhasil!', 'success');
    updateAuthButtons(null);
    // Redirect ke halaman utama jika di index, ke shop jika di shop
    if (window.location.pathname.endsWith('index.html')) {
      window.location.href = 'index.html';
    } else if (window.location.pathname.endsWith('shop.html')) {
      window.location.href = 'shop.html';
    }
  };
}; 