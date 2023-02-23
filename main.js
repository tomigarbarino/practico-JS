const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

let isMobileMenuOpen = false;
let isCartAsideOpen = false;
let isDesktopMenuOpen = false;

navEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
  if (!isDesktopMenuOpen) {
    desktopMenu.classList.remove('hidden');
    isDesktopMenuOpen = true;
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
    if (isCartAsideOpen) {
      toggleCartAside();
    }
  } else {
    desktopMenu.classList.add('hidden');
    isDesktopMenuOpen = false;
  }
}

function toggleMobileMenu() {
  if (!isMobileMenuOpen) {
    mobileMenu.classList.remove('hidden');
    isMobileMenuOpen = true;
    if (isCartAsideOpen) {
      toggleCartAside();
    }
    if (isDesktopMenuOpen) {
      toggleDesktopMenu();
    }
  } else {
    mobileMenu.classList.add('hidden');
    isMobileMenuOpen = false;
  }
}

function toggleCartAside() {
  if (!isCartAsideOpen) {
    aside.classList.remove('hidden');
    isCartAsideOpen = true;
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
    if (isDesktopMenuOpen) {
      toggleDesktopMenu();
    }
  } else {
    aside.classList.add('hidden');
    isCartAsideOpen = false;
  }
}
