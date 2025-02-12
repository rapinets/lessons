const successPopup = document.getElementById('success');
const notSuccessPopup = document.getElementById('not-success');
const popupBtn = document.querySelectorAll('.popup__btn');
const popupCloseBtn = document.querySelectorAll('.popup__close-btn');


function closePopup() {
  successPopup.classList.remove('show-popup');
  notSuccessPopup.classList.remove('show-popup');
}

// closePopup();

popupBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    closePopup();
  });
});

popupCloseBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    closePopup();
  });
});


window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    closePopup();
  }
});

document.getElementById('open-success').addEventListener('click', () => { successPopup.classList.add('show-popup') });
document.getElementById('open-not-success').addEventListener('click', () => { notSuccessPopup.classList.add('show-popup') });