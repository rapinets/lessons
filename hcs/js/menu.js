"use strict"

const subMenus = document.querySelectorAll('.menu__inner');

if (subMenus.length > 0) {
  subMenus.forEach(subMenu => {
    const parent = subMenu.parentElement;

    if (parent) {
      parent.addEventListener('click', function (event) {

        subMenus.forEach(menu => {
          if (menu !== subMenu) {
            menu.classList.add('hide');
          }
        });

        subMenu.classList.toggle('hide');

        event.stopPropagation();
      });
    }
  });
}

document.addEventListener('click', function () {
  subMenus.forEach(subMenu => subMenu.classList.add('hide'));
});

const burgerIcon = document.querySelector('.burger-icon');
const asideBody = document.querySelector('.aside__body');

if (burgerIcon) {
  burgerIcon.addEventListener('click', (e) => {
    document.body.classList.toggle('lock');
    burgerIcon.classList.toggle('open-menu');
    asideBody.classList.toggle('open-menu');
  });
}

const subLinks = document.querySelectorAll('.sub-menu__link[data-goto]');

if (subLinks.length) {
  subLinks.forEach((subLink) => {

    subLink.addEventListener('click', (e) => {
      if (subLink.dataset.goto && document.querySelector(subLink.dataset.goto)) {
        const gotoBlock = document.querySelector(subLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

        if (burgerIcon.classList.contains('open-menu')) {
          document.body.classList.remove('lock');
          burgerIcon.classList.remove('open-menu');
          asideBody.classList.remove('open-menu');
        }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth',
        });
        e.preventDefault();
      }
    });
  });
}