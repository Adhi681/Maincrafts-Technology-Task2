// ===== AOS Init =====
AOS.init({ duration: 800, once: true });

// ===== Form Validation =====
function validateForm() {
  const name  = document.forms["contactForm"]["name"].value.trim();
  const email = document.forms["contactForm"]["email"].value.trim();
  const msg   = document.forms["contactForm"]["message"].value.trim();

  const errorBox  = document.getElementById("form-error");
  const errorText = document.getElementById("error-text");
  const successBox = document.getElementById("form-success");

  // Hide both first
  errorBox.style.display = "none";
  successBox.style.display = "none";

  if (name === "") {
    errorText.textContent = "Please enter your name.";
    errorBox.style.display = "flex";
    return false;
  }

  if (email === "") {
    errorText.textContent = "Please enter your email address.";
    errorBox.style.display = "flex";
    return false;
  }

  // Basic email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorText.textContent = "Please enter a valid email address.";
    errorBox.style.display = "flex";
    return false;
  }

  if (msg === "") {
    errorText.textContent = "Please write a message before sending.";
    errorBox.style.display = "flex";
    return false;
  }

  // All good — show success and reset form
  successBox.style.display = "flex";
  document.forms["contactForm"].reset();
  return false;
}
