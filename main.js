window.addEventListener("scroll", onScroll);

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 600) {
    buttonBackToTop.classList.add("show");
  } else {
    buttonBackToTop.classList.remove("show");
  }
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  // quais dados vou precisar?
  const sectionTop = section.offsetTop; // top da seção
  const sectionHeight = section.offsetHeight; // altura da seção
  // verificar se a seção passou da linha

  // o top da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop; // true ou false

  // a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight;

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine; // true ou false

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine; // true ou false

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#contact ,
#contact .button,
#contact .content img`);
