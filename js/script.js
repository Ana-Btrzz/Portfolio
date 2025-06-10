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

function activateDescription() {
  const arrayLi = document.querySelectorAll(".projetos-lista li");
  const divs = document.querySelectorAll(".descricao div");

  function enableDescription(event) {
    const clickedClass = event.currentTarget.classList[0]; // Para obter a primeira classe do li

    arrayLi.forEach((li) => {
      li.classList.remove("ativo");
    });

    event.currentTarget.classList.add("ativo");

    divs.forEach((div) => {
      if (div.classList.contains(clickedClass)) {
        div.classList.add("ativo");
        console.log("Adicionando ativo a:", div);
      } else {
        div.classList.remove("ativo");
      }
    });
  }

  arrayLi.forEach((link) => {
    link.addEventListener("click", enableDescription);
  });
}

activateDescription();

new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 60,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
    dynamicBullets: true,
  },

  //responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
