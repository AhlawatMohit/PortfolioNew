function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let typed = new Typed('#element', {
    strings: ['UI/UX Designer', 'Mobile App Developer', 'Frontend Developer'],
    typeSpeed: 80,
  });