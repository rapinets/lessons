"use strict"

window.addEventListener('load', windowLoad);
const html = document.documentElement;

function windowLoad() {
  document.addEventListener('click', documentActions);
  scrollActions();
  adaptMenu();
  window.addEventListener('resize', adaptMenu);
  window.addEventListener('resize', mobilMenu);
  // window.addEventListener('DOMContentLoaded', adaptMenu);

  // changeText();
}

function documentActions(e) {
  const type = e.type
  const targetElement = e.target

  if (type === 'click') {
    // menu burger
    const globalHeader = document.querySelector('.globalHeader');
    const menuNavOpen = document.querySelector('.menuNav');
    const menuText = document.querySelector('.menuText');

    if (targetElement.closest('.menuButton')) {
      globalHeader.classList.toggle('open');
      menuNavOpen.classList.toggle('open');
    }

    if (targetElement.closest('.menuButton') && globalHeader.classList.contains('open')) {
      menuText.textContent = 'Close Menu';
    } else {
      menuText.textContent = 'Menu';
    }

    if (targetElement.closest('.menuClose')) {
      globalHeader.classList.remove('open');
      menuNavOpen.classList.remove('open');
    }

    if (targetElement.closest('.toggleMenu')) {
      globalHeader.classList.remove('open');
      menuNavOpen.classList.remove('open');
    }

    const moreItems = document.querySelector('.moreItemsNav');

    if (targetElement.closest('.moreButton')) {
      moreItems.classList.toggle('open');
    }

    const regionMenu = document.querySelector('.regionsListWrapper');
    const regionButton = document.querySelector('.regionButton');

    if (targetElement.closest('.regionButton')) {
      regionMenu.classList.toggle('openRegion');
    }

    if (targetElement.closest('.regionButton') && regionMenu.classList.contains('openRegion')) {
      regionButton.textContent = 'Update Preference';
    } else {
      regionButton.textContent = 'Change';
    }

    const headerSearchBar = document.querySelector('.headerSearchBar');
    const searchBar = document.querySelector('.searchBar');
    const searchClose = document.querySelector('.searchClose');

    if (targetElement.closest('.search')) {
      headerSearchBar.classList.toggle('active');
      searchBar.classList.toggle('active');
      searchClose.classList.toggle('active');

      targetElement.closest('search').preventDefault();
    }

    // go to top
    if (targetElement.closest('[data-goto]')) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      e.preventDefault();
    }

  } else if (type === 'keydown') {

  }
}

function changeText() {

}

function scrollActions() {
  window.addEventListener('scroll', scrollAction)

  function scrollAction() {

  }
}

function adaptMenu() {
  const menu = document.getElementById('landingWrapper');
  const items = document.querySelectorAll('.responsiveNav .subNavListItem');
  const moreMenu = document.querySelector('.moreNavTrigger');
  const more = document.getElementById('responsive-nav-more-items-list');
  const moreItems = document.querySelectorAll('.moreNavListItem');

  if (window.innerWidth > 640) {
    document.querySelector('.responsiveNav').classList.remove('allHidden');

    items.forEach(item => item.classList.remove('hidden'));

    moreItems.forEach(item => {
      if (item.classList.contains('clone')) item.remove();
    });

    let menuWidth = menu.offsetWidth;
    let totalWidth = moreMenu.offsetWidth;

    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains('moreNavTrigger')) continue;
      totalWidth += items[i].offsetWidth;
      if (totalWidth > menuWidth) {
        items[i].classList.add('hidden');
      }

      if (items[i].classList.contains('hidden')) {
        let clone = items[i].cloneNode(true);
        clone.classList.remove('hidden');
        clone.classList.remove('subNavListItem');
        clone.classList.add('moreNavListItem');
        clone.classList.add('clone');
        clone.firstChild.classList.remove('subNavLink');
        clone.firstChild.classList.add('moreNavLink');
        more.insertAdjacentElement('beforeend', clone);
      }
    }
  }

}

function mobilMenu() {
  const items = document.querySelectorAll('.responsiveNav .subNavListItem');
  const moreMenu = document.querySelector('.moreNavTrigger');
  const more = document.getElementById('responsive-nav-more-items-list');
  const moreItems = document.querySelectorAll('.moreNavListItem');
  if (window.innerWidth <= 640) {
    items.forEach(item => item.classList.remove('hidden'));

    moreItems.forEach(item => {
      if (item.classList.contains('clone')) item.remove();
    });

    document.querySelector('.responsiveNav').classList.add('allHidden');

    for (let i = 0; i < items.length; i++) {
      if (!items[i].classList.contains('gemWrapper') && !items[i].classList.contains('moreNavTrigger')) {
        items[i].classList.add('hidden');
      }
      if (items[i].classList.contains('hidden')) {
        let clone = items[i].cloneNode(true);
        clone.classList.remove('hidden');
        clone.classList.remove('subNavListItem');
        clone.classList.add('moreNavListItem');
        clone.classList.add('clone');
        clone.firstChild.classList.remove('subNavLink');
        clone.firstChild.classList.add('moreNavLink');
        more.insertAdjacentElement('beforeend', clone);
      }
    }
  }

}





