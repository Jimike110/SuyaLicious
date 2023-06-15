// Get the necessary DOM elements
const openMobileMenuBtn = document.querySelector("#openMobileMenu");
const closeMobileMenuBtn = document.querySelector("#closeMobileMenu");
const mobileMenu = document.querySelector(".mobileMenu");
const year = document.querySelector("#year");

year.innerHTML = new Date().getFullYear();

// Toggle the mobile menu
openMobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

