// ============================================================
//  login.js — Lógica del formulario de inicio de sesión
// ============================================================

const DEMO_CREDENTIALS = {
  email: "usuario@correo.com",
  password: "123456",
};

const form        = document.getElementById("loginForm");
const emailInput  = document.getElementById("email");
const passInput   = document.getElementById("password");
const emailError  = document.getElementById("emailError");
const passError   = document.getElementById("passwordError");
const submitBtn   = document.getElementById("submitBtn");
const spinner     = document.getElementById("spinner");
const btnText     = submitBtn.querySelector(".btn-text");
const togglePwBtn = document.getElementById("togglePw");
const eyeIcon     = document.getElementById("eyeIcon");
const toast       = document.getElementById("toast");

const eyeOpenSVG   = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
const eyeClosedSVG = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;

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

function validateForm() {
  let valid = true;
  if (!isValidEmail(emailInput.value)) {
    showError(emailInput, emailError, "Ingresa un correo válido.");
    valid = false;
  } else {
    clearError(emailInput, emailError);
  }
  if (passInput.value.trim().length < 6) {
    showError(passInput, passError, "La contraseña debe tener al menos 6 caracteres.");
    valid = false;
  } else {
    clearError(passInput, passError);
  }
  return valid;
}

emailInput.addEventListener("input", () => {
  if (isValidEmail(emailInput.value)) clearError(emailInput, emailError);
});
passInput.addEventListener("input", () => {
  if (passInput.value.trim().length >= 6) clearError(passInput, passError);
});

togglePwBtn.addEventListener("click", () => {
  const isPassword = passInput.type === "password";
  passInput.type = isPassword ? "text" : "password";
  eyeIcon.innerHTML = isPassword ? eyeClosedSVG : eyeOpenSVG;
});

function setLoading(isLoading) {
  submitBtn.disabled    = isLoading;
  btnText.style.display = isLoading ? "none"  : "block";
  spinner.style.display = isLoading ? "block" : "none";
}

function showToast(message, isError = false) {
  toast.textContent       = message;
  toast.style.background  = isError ? "var(--error)" : "var(--success)";
  toast.style.color       = isError ? "#fff"         : "#0a0a0f";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

async function authenticateUser(email, password) {
  await new Promise((resolve) => setTimeout(resolve, 800));
  if (email.trim() === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
    return { success: true, message: "Sesión iniciada correctamente" };
  }
  return { success: false, message: "Correo o contraseña incorrectos." };
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  setLoading(true);
  try {
    const result = await authenticateUser(emailInput.value, passInput.value);
    if (result.success) {
      showToast("✓ " + result.message);
      const remember = document.getElementById("remember").checked;
      if (remember) {
        localStorage.setItem("rememberedEmail", emailInput.value);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
      // window.location.href = "/dashboard";
    } else {
      showToast("✗ " + result.message, true);
      showError(emailInput, emailError, result.message);
      showError(passInput, passError, " ");
    }
  } catch (err) {
    showToast("✗ Error de conexión. Intenta de nuevo.", true);
    console.error("Error de autenticación:", err);
  } finally {
    setLoading(false);
  }
});

(function init() {
  const savedEmail = localStorage.getItem("rememberedEmail");
  if (savedEmail) {
    emailInput.value = savedEmail;
    document.getElementById("remember").checked = true;
    passInput.focus();
  } else {
    emailInput.focus();
  }
})();