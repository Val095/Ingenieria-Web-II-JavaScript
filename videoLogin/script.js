// ─── CONFIG ───────────────────────────────────────────
  const VALID_USER = 'admin';
  const VALID_PASS = '1234';
  const MAX_ATTEMPTS = 3;
  // ──────────────────────────────────────────────────────

  let attempts = 0;

  function handleLogin(e) {
    // Ripple effect
    const btn = document.getElementById('btn');
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value;

    if (user === VALID_USER && pass === VALID_PASS) {
      successLogin();
      return;
    }

    attempts++;
    updatePips();
    showError();

    if (attempts >= MAX_ATTEMPTS) {
      setTimeout(showVideoOverlay, 600);
    }
  }

  function updatePips() {
    for (let i = 1; i <= 3; i++) {
      const pip = document.getElementById('pip' + i);
      if (i <= attempts) pip.classList.add('active');
    }
  }

  function showError() {
    const card = document.getElementById('card');
    const errMsg = document.getElementById('error-msg');
    const userInput = document.getElementById('username');
    const passInput = document.getElementById('password');

    // Shake card
    card.classList.remove('shake');
    void card.offsetWidth;
    card.classList.add('shake');

    // Flash inputs
    userInput.classList.add('error-field');
    passInput.classList.add('error-field');
    setTimeout(() => {
      userInput.classList.remove('error-field');
      passInput.classList.remove('error-field');
    }, 600);

    // Error messages
    const msgs = [
      '⚠ Usuario o contraseña incorrectos',
      '⚠ Credenciales inválidas — ' + (MAX_ATTEMPTS - attempts) + ' intento' + (MAX_ATTEMPTS - attempts !== 1 ? 's' : '') + ' restante',
      '🚨 Último intento fallido — activando bloqueo...'
    ];
    errMsg.textContent = msgs[Math.min(attempts - 1, 2)];
    errMsg.classList.add('visible');
  }

  function showVideoOverlay() {
    const overlay = document.getElementById('video-overlay');
    overlay.classList.add('show');
    // Try to play with sound after user interaction
    const video = document.getElementById('alert-video');
    video.muted = false;
    video.play().catch(() => { video.muted = true; video.play(); });
  }

  function closeOverlay() {
    const overlay = document.getElementById('video-overlay');
    overlay.style.animation = 'none';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.4s';
    setTimeout(() => {
      overlay.classList.remove('show');
      overlay.style.opacity = '';
      overlay.style.transition = '';
    }, 400);

    // Reset
    attempts = 0;
    for (let i = 1; i <= 3; i++) {
      document.getElementById('pip' + i).classList.remove('active');
    }
    document.getElementById('error-msg').classList.remove('visible');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    const video = document.getElementById('alert-video');
    video.pause();
    video.currentTime = 0;
  }

  function successLogin() {
    document.getElementById('btn').textContent = '✓ BIENVENIDO';
    document.getElementById('btn').style.background = '#22c55e';
    document.getElementById('btn').style.boxShadow = '0 0 30px rgba(34,197,94,0.5)';
    document.getElementById('error-msg').classList.remove('visible');
  }

  // Allow Enter key
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('btn').click();
  });