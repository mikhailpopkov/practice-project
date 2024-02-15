window.addEventListener("DOMContentLoaded", function () {
  `use strict`;

  const selectInput = document.querySelector(".select__input"),
    selectDropdown = document.querySelector(".select__dropdown"),
    selectItem = document.querySelector(".select__item");

  function openDropDown() {
    selectDropdown.classList.add("open");
  }

  function closeDropDown() {
    selectDropdown.classList.remove("open");
  }

  selectInput.addEventListener("click", function (e) {
    if (selectDropdown.classList.contains("open")) {
      closeDropDown();
    } else {
      openDropDown();
    }
  });

  selectItem.addEventListener("click", function (e) {
        
  });
});
