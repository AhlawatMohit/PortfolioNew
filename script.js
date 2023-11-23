function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let typed = new Typed('#element', {
    strings: [ 'Frontend Developer', 'UI/UX Designer', 'MERN/MERN Stack'],
    typeSpeed: 80,
  });