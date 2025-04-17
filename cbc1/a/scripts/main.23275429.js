"use strict"

window.addEventListener('load', windowLoad);
const html = document.documentElement;

function windowLoad() {
  document.addEventListener('click', documentActions);
  scrollActions();
}

function documentActions(e) {
  const type = e.type
  const targetElement = e.target

  if (type === 'click') {
    // menu burger
    const burgerBtn = document.querySelector('.cReFZl');
    const burgerBtnClose = document.querySelector('.close-burger');

    if (targetElement.closest('.kbtopu')) {
      html.classList.toggle('menu-open');
      burgerBtn.classList.toggle('hide');
      burgerBtnClose.classList.toggle('hide');
    }

    if (!targetElement.closest('.bdbMGE') && !targetElement.closest('.cReFZl')) {
      html.classList.remove('menu-open');
      burgerBtn.classList.remove('hide');
      burgerBtnClose.classList.add('hide');
    }

    // search
    const menuTop = document.querySelector('.dHZoXa');
    const conect = document.querySelector('.cYddmL');
    const search = document.querySelector('.PqzhE');
    const searchForm = document.getElementById('form-wrapper');
    const closeSearchForm = document.getElementById('close-search-form');

    if (targetElement.closest('.PqzhE')) {
      conect.classList.add('hide');
      search.classList.add('hide');
      menuTop.classList.add('hide');
      searchForm.classList.remove('hide');
    } else if (closeSearchForm && !targetElement.closest('.flZDms')) {
      conect.classList.remove('hide');
      search.classList.remove('hide');
      menuTop.classList.remove('hide');
      searchForm.classList.add('hide');
    }

    const contacts = document.querySelector('.bzezyr');

    if (targetElement.closest('.cYddmL')) {
      conect.classList.add('hide');
      menuTop.classList.add('hide');
      contacts.classList.remove('hide');
    } else if (!targetElement.closest('.PqzhE')) {
      conect.classList.remove('hide');
      menuTop.classList.remove('hide');
      contacts.classList.add('hide');
    }

    // go to top
    if (targetElement.closest('[data-goto]')) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      e.preventDefault();
    }

  } else if (type === 'keydown') {

  }
}

function bodyLock(mode) {
  let lockPaddingValue = (window.innerWidth - document.body.offsetWidth) + 'px'
  lockPaddingValue = mode ? lockPaddingValue : 0;
  document.body.style.paddingInlineEnd = lockPaddingValue

  const paddingLockElements = document.querySelectorAll('[data-pl]')
  paddingLockElements.forEach(paddingLockElement => {
    if (paddingLockElement.dataset.pl === 'inset') {
      paddingLockElement.style.insetInlineEnd = lockPaddingValue
    } else {
      paddingLockElement.style.paddingInlineEnd = lockPaddingValue
    }
  });
  document.documentElement.classList.toggle('lock', mode)
}

function scrollActions() {
  window.addEventListener('scroll', scrollAction)

  function scrollAction() {
    const logoNet = document.querySelector('[data-net-nav-logo]');
    const menuTop = document.querySelector('.dHZoXa');

    if (window.scrollY > 40) {
      logoNet.classList.remove('gYRsgG');
      logoNet.classList.add('CLXFs');
      html.classList.add('scroll-4');
    }

    if (window.scrollY < 39) {
      logoNet.classList.remove('CLXFs');
      logoNet.classList.add('gYRsgG');
      html.classList.remove('scroll-4');
    }
  }
}