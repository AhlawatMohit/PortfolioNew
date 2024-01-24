function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let typed = new Typed('#element', {
    strings: [ 'Frontend Web Developer', 'UI/UX Designer', 'MERN/MEAN Stack'],
    typeSpeed: 80,
  });