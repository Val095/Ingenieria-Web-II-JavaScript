// ============================================================
//  register.js — Lógica del formulario de registro
// ============================================================

// ─── Referencias al DOM ───────────────────────────────────────
const form            = document.getElementById("registerForm");
const firstNameInput  = document.getElementById("firstName");
const lastNameInput   = document.getElementById("lastName");
const emailInput      = document.getElementById("email");
const passInput       = document.getElementById("password");
const confirmInput    = document.getElementById("confirmPassword");
const termsCheck      = document.getElementById("terms");

const firstNameError  = document.getElementById("firstNameError");
const lastNameError   = document.getElementById("lastNameError");
const emailError      = document.getElementById("emailError");
const passError       = document.getElementById("passwordError");
const confirmError    = document.getElementById("confirmError");

const submitBtn       = document.getElementById("submitBtn");
const spinner         = document.getElementById("spinner");
const btnText         = submitBtn.querySelector(".btn-text");

const togglePwBtn     = document.getElementById("togglePw");
const eyeIcon         = document.getElementById("eyeIcon");
const toggleConfirmBtn= document.getElementById("toggleConfirm");
const eyeIconConfirm  = document.getElementById("eyeIconConfirm");

const strengthWrap    = document.getElementById("strengthWrap");
const strengthBars    = [
  document.getElementById("s1"),
  document.getElementById("s2"),
  document.getElementById("s3"),
  document.getElementById("s4"),
];
const strengthLabel   = document.getElementById("strengthLabel");
const toast           = document.getElementById("toast");

// ─── SVG ojos ─────────────────────────────────────────────────
const eyeOpenSVG   = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
const eyeClosedSVG = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;

// ─── Helpers de validación ────────────────────────────────────

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function showError(input, errorEl, msg) {
  input.classList.add("error");
  errorEl.classList.add("show");
  if (msg) errorEl.textContent = msg;
}

function clearError(input, errorEl) {
  input.classList.remove("error");
  errorEl.classList.remove("show");
}

// ─── Fortaleza de contraseña ──────────────────────────────────

const strengthLevels = [
  { label: "Muy débil",  color: "#ff6b6b" },
  { label: "Débil",      color: "#ffa96b" },
  { label: "Moderada",   color: "#ffd56b" },
  { label: "Fuerte",     color: "#6bffb8" },
];

/**
 * Calcula el puntaje de fortaleza de la contraseña (0-4).
 * @param {string} pw
 * @returns {number}
 */
function getStrengthScore(pw) {
  let score = 0;
  if (pw.length >= 8)              score++;
  if (pw.length >= 12)             score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/[0-9]/.test(pw))            score++;
  if (/[^A-Za-z0-9]/.test(pw))    score++;
  return Math.min(score, 4);
}

function updateStrength(pw) {
  if (!pw) {
    strengthWrap.classList.remove("show");
    return;
  }
  strengthWrap.classList.add("show");

  const score = getStrengthScore(pw);
  const level = strengthLevels[Math.max(score - 1, 0)];

  strengthBars.forEach((bar, i) => {
    bar.style.background = i < score ? level.color : "var(--border)";
  });

  strengthLabel.textContent = level.label;
  strengthLabel.style.color = level.color;
}

// ─── Validación completa del formulario ───────────────────────

function validateForm() {
  let valid = true;

  if (firstNameInput.value.trim().length < 2) {
    showError(firstNameInput, firstNameError, "Mínimo 2 caracteres.");
    valid = false;
  } else {
    clearError(firstNameInput, firstNameError);
  }

  if (lastNameInput.value.trim().length < 2) {
    showError(lastNameInput, lastNameError, "Mínimo 2 caracteres.");
    valid = false;
  } else {
    clearError(lastNameInput, lastNameError);
  }

  if (!isValidEmail(emailInput.value)) {
    showError(emailInput, emailError, "Ingresa un correo válido.");
    valid = false;
  } else {
    clearError(emailInput, emailError);
  }

  if (passInput.value.trim().length < 8) {
    showError(passInput, passError, "Mínimo 8 caracteres.");
    valid = false;
  } else {
    clearError(passInput, passError);
  }

  if (confirmInput.value !== passInput.value || confirmInput.value === "") {
    showError(confirmInput, confirmError, "Las contraseñas no coinciden.");
    valid = false;
  } else {
    clearError(confirmInput, confirmError);
  }

  if (!termsCheck.checked) {
    showToast("✗ Debes aceptar los términos y condiciones.", true);
    valid = false;
  }

  return valid;
}

// ─── Limpieza en tiempo real ───────────────────────────────────

firstNameInput.addEventListener("input",  () => { if (firstNameInput.value.trim().length >= 2) clearError(firstNameInput, firstNameError); });
lastNameInput.addEventListener("input",   () => { if (lastNameInput.value.trim().length >= 2)  clearError(lastNameInput, lastNameError); });
emailInput.addEventListener("input",      () => { if (isValidEmail(emailInput.value))           clearError(emailInput, emailError); });
passInput.addEventListener("input",       () => {
  updateStrength(passInput.value);
  if (passInput.value.trim().length >= 8) clearError(passInput, passError);
  if (confirmInput.value && confirmInput.value === passInput.value) clearError(confirmInput, confirmError);
});
confirmInput.addEventListener("input",   () => {
  if (confirmInput.value === passInput.value) clearError(confirmInput, confirmError);
});

// ─── Toggle contraseña ────────────────────────────────────────

function makeToggle(btn, input, icon) {
  btn.addEventListener("click", () => {
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    icon.innerHTML = isPassword ? eyeClosedSVG : eyeOpenSVG;
  });
}

makeToggle(togglePwBtn,      passInput,    eyeIcon);
makeToggle(toggleConfirmBtn, confirmInput, eyeIconConfirm);

// ─── Toast ────────────────────────────────────────────────────

function showToast(message, isError = false) {
  toast.textContent = message;
  toast.style.background = isError ? "var(--error)" : "var(--success)";
  toast.style.color       = isError ? "#fff"         : "#0a0a0f";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

// ─── Estado de carga ──────────────────────────────────────────

function setLoading(isLoading) {
  submitBtn.disabled      = isLoading;
  btnText.style.display   = isLoading ? "none"  : "block";
  spinner.style.display   = isLoading ? "block" : "none";
}

// ─── Simulación de registro ───────────────────────────────────

/**
 * Simula una llamada al servidor para crear una cuenta.
 * Reemplaza con tu lógica real de API.
 * @param {object} data
 * @returns {Promise<{success: boolean, message: string}>}
 */
async function registerUser(data) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulación: el correo ya existe
  if (data.email === "usuario@correo.com") {
    return { success: false, message: "Este correo ya está registrado." };
  }

  return { success: true, message: `Cuenta creada. ¡Bienvenido, ${data.firstName}!` };
}

// ─── Envío del formulario ─────────────────────────────────────

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setLoading(true);

  const userData = {
    firstName: firstNameInput.value.trim(),
    lastName:  lastNameInput.value.trim(),
    email:     emailInput.value.trim(),
    password:  passInput.value,
  };

  try {
    const result = await registerUser(userData);

    if (result.success) {
      showToast("✓ " + result.message);

      // Redirigir al login después de 2 segundos
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    } else {
      showToast("✗ " + result.message, true);
      if (result.message.includes("correo")) {
        showError(emailInput, emailError, result.message);
      }
    }
  } catch (err) {
    showToast("✗ Error de conexión. Intenta de nuevo.", true);
    console.error("Error de registro:", err);
  } finally {
    setLoading(false);
  }
});