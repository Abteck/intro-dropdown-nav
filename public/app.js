const mobile_menu = document.getElementById("mobile-menu");
const features = document.getElementById("features");
const company = document.getElementById("company");
const featuresMenu = document.getElementById("features-menu");
const companyMenu = document.getElementById("company-menu");
const arrow_f = document.getElementById("arrow-f");
const arrow_c = document.getElementById("arrow-c");
const ham_close = document.getElementById("hamburger-close");
const hamb_open = document.getElementById("hamburger-open");

features.addEventListener("click", () => {
  featuresMenu.classList.toggle("hidden");
  featuresMenu.classList.toggle("flex");

  arrow_f.classList.toggle("arrow-down");
  arrow_f.classList.toggle("arrow-up");
});

company.addEventListener("click", () => {
  companyMenu.classList.toggle("hidden");
  companyMenu.classList.toggle("flex");

  arrow_c.classList.toggle("arrow-down");
  arrow_c.classList.toggle("arrow-up");
});

// hamburger menu
hamb_open.addEventListener("click", () => {
  mobile_menu.classList.toggle("active");
  document.body.classList.add("dark");
});

ham_close.addEventListener("click", () => {
  mobile_menu.classList.toggle("active");
  document.body.classList.remove("dark");
});

document.addEventListener("click", (e) => {
  if (!mobile_menu.contains(e.target) && e.target !== hamb_open) {
    mobile_menu.classList.remove("active");
    document.body.classList.remove("dark");
  }
});
