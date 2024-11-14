function initScrollSuave() {
  const linkInterno = document.querySelectorAll(".nav-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
  }
  linkInterno.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();

function teste() {
  const arrayLi = document.querySelectorAll(".projetos-lista li");
  function enableDescription(event) {
    const classe = event.currentTarget.getAttribute("class");
    const projeto = document.querySelector(`div.${classe}`);
    console.log(classe);
    console.log(projeto);
  }

  arrayLi.forEach((link) => {
    link.addEventListener("click", enableDescription);
  });
}

teste();
