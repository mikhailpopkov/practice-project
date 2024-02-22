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
});
