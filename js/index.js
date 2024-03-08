window.addEventListener("DOMContentLoaded", function () {
  `use strict`;

  /*SELECT*/

  const selectInput = document.querySelector(".select__input"),
    selectDropdown = document.querySelector(".select__dropdown"),
    chooseLang = document.querySelector(".choose-lang"),
    selectItem = document.querySelectorAll(".select__item");

  function openDropDown() {
    selectDropdown.classList.add("open");
  }

  function closeDropDown() {
    selectDropdown.classList.remove("open");
  }

  selectInput.addEventListener("click", function () {
    if (selectDropdown.classList.contains("open")) {
      closeDropDown();
    } else {
      openDropDown();
    }
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".select")) {
      closeDropDown();
    }
  });

  selectItem.forEach((item) =>
    item.addEventListener("click", function () {
      chooseLang.innerHTML = item.textContent;
      closeDropDown();
    })
  );

  /* SEARCH */

  const searchIcon = document.querySelector(".search-icon"),
    searchBlock = document.querySelector(".top__nav-search"),
    searchClear = document.querySelector(".search-clear"),
    searchInp = document.querySelector("#search");

  searchIcon.addEventListener("click", function () {
    searchBlock.classList.add("search-active");
    searchClear.style.display = "block";
  });

  searchClear.addEventListener("click", function () {
    searchBlock.classList.remove("search-active");
    searchClear.style.display = "none";
    searchInp.value = "";
  });

  /* SLIDERS */

  const slider = document.querySelectorAll(".swiper");

  const swiperTop = new Swiper(slider[0], {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
  });

  const swiperNews = new Swiper(slider[1], {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".n-arrow-right",
      prevEl: ".n-arrow-left",
    },
  });

  /* BURGER MENU */

  let burgerMenu = document.querySelector(".menu__btn"),
    burgerBlock = document.querySelector(".burger"),
    body = document.querySelector("body");

  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    burgerBlock.classList.toggle("active");
    if (burgerBlock.classList.contains("active")) {
      body.classList.add("hidden");
    } else {
      body.classList.remove("hidden");
    }
  });
});
