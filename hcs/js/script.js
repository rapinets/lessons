"use strict"

// const subMenus = document.querySelectorAll('.menu__inner');

// if (subMenus.length > 0) {
// 	subMenus.forEach(subMenu => {
// 		const parent = subMenu.parentElement;

// 		if (parent) {
// 			parent.addEventListener('click', function (event) {

// 				subMenus.forEach(menu => {
// 					if (menu !== subMenu) {
// 						menu.classList.add('hide');
// 					}
// 				});

// 				subMenu.classList.toggle('hide');

// 				event.stopPropagation();
// 			});
// 		}
// 	});
// }

// document.addEventListener('click', function () {
// 	subMenus.forEach(subMenu => subMenu.classList.add('hide'));
// });

// const burgerIcon = document.querySelector('.burger-icon');
// const asideBody = document.querySelector('.aside__body');

// if (burgerIcon) {
// 	burgerIcon.addEventListener('click', (e) => {
// 		document.body.classList.toggle('lock');
// 		burgerIcon.classList.toggle('open-menu');
// 		asideBody.classList.toggle('open-menu');
// 	});
// }

// const subLinks = document.querySelectorAll('.sub-menu__link[data-goto]');

// if (subLinks.length) {
// 	subLinks.forEach((subLink) => {

// 		subLink.addEventListener('click', (e) => {
// 			if (subLink.dataset.goto && document.querySelector(subLink.dataset.goto)) {
// 				const gotoBlock = document.querySelector(subLink.dataset.goto);
// 				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

// 				if (burgerIcon.classList.contains('open-menu')) {
// 					document.body.classList.remove('lock');
// 					burgerIcon.classList.remove('open-menu');
// 					asideBody.classList.remove('open-menu');
// 				}

// 				window.scrollTo({
// 					top: gotoBlockValue,
// 					behavior: 'smooth',
// 				});
// 				e.preventDefault();
// 			}
// 		});
// 	});
// }

// ===================================================================

const formBtn = document.querySelector('.btn-form');
const formTextarea = document.querySelector('.form__textarea');

formTextarea.addEventListener('input', () => {
	if (formTextarea.value.trim().length > 0) {
		formBtn.classList.add('btn-form--active');
	} else {
		formBtn.classList.remove('btn-form--active');
	}
});

formBtn.addEventListener('click', () => {
	formBtn.classList.toggle('btn-form--onclick');
});

// webinars ===================================================================

const webinarsCard = document.querySelectorAll('.card-webinars--registered .card-webinars__btn');
webinarsCard.forEach(item => {
	item.textContent = 'Приєднатися';
});

document.querySelectorAll('.card-webinars').forEach((card) => {
	const webinarsToggle = card.querySelector('.card-webinars__toggle');
	const webinarsCardBtn = card.querySelector('.card-webinars__btn');
	webinarsToggle.addEventListener('click', () => {
		if (card.classList.contains('card-webinars--registered')) {
			card.classList.toggle('registered-open');
		} else {
			card.classList.toggle('webinars-open');
		}
		if (card.classList.contains('registered-open')) {
			webinarsCardBtn.textContent = 'ZOOM';
		}
	});
});

function movePriceBlocks() {
	document.querySelectorAll('.card-webinars').forEach(card => {
		const price = card.querySelector('.card-webinars__price');
		const datetime = card.querySelector('.card-webinars__part');

		if (window.innerWidth <= 768) {
			datetime.parentNode.insertBefore(price, datetime);
		}
	});
}

movePriceBlocks();

window.addEventListener('resize', movePriceBlocks);

const webinars = document.getElementById('webinars');

const cardsWebinars = document.querySelectorAll('.card-webinars');
const webinarsBtn = document.querySelector('.webinars__btn');
const webinarsBtnSpan = document.querySelector('.webinars__btn span');

for (let i = 3; i < cardsWebinars.length; i++) {
	if (window.innerWidth <= 768) {
		cardsWebinars[i].classList.add('hide');
		webinarsBtn.addEventListener('click', () => {
			if (cardsWebinars[i].classList.contains('hide')) {
				cardsWebinars[i].classList.remove('hide');
				webinarsBtnSpan.textContent = 'Показати менше';
			} else {
				cardsWebinars[i].classList.add('hide');
				webinarsBtnSpan.textContent = 'Показати більше';
				webinars.scrollIntoView({ behavior: 'instant', block: 'start' });
			}
		});
	}
}

// contract =============================================================================

const contractStatus = document.querySelectorAll('.card-contract--closed .card-contract__status');

contractStatus.forEach(item => {
	item.textContent = 'Закритий';
});

// =====================================================================

document.querySelectorAll('.card-contract').forEach(card => {
	const toggle = card.querySelector('.card-contract__toggle');
	toggle.addEventListener('click', () => {
		card.classList.toggle('contract-open');
	});
});

// ===============================================================

const staff = document.getElementById('staff');

const staffHidden = document.querySelector('.staff__inner-body');
const staffBtn = document.querySelector('.staff__btn');
const staffLink = document.querySelector('.staff__link');
const staffLinkSpan = document.querySelector('.staff__link span');

staffLink.addEventListener('click', () => {
	if ((staffHidden.style.display === 'none' || staffHidden.style.display === '') && (staffBtn.style.display === 'none' || staffBtn.style.display === '')) {
		staffHidden.style.display = 'block';
		staffBtn.style.display = 'block';

		staffLinkSpan.textContent = 'Показати менше';
	} else {
		staffHidden.style.display = 'none';
		staffBtn.style.display = 'none';

		staffLinkSpan.textContent = 'Показати більше';
		staff.scrollIntoView({ behavior: 'instant', block: 'start' });
	}
});

// calculation =======================================================================

const calculationLink = document.querySelector('.calculation__link');
const calculationList = document.querySelector('.calculation__list-wrapper');
const calculationTable = document.querySelector('.calculation__table-wrapper');
const calculationTableRecepient = document.querySelector('.calculation__tb-reciept-wrapper');
const calculationBtn = document.querySelector('.calculation__buttons');

const calculationLinkSpan = document.querySelector('.calculation__link span');

const calculation = document.getElementById('calculation');

calculationLink.addEventListener('click', () => {
	if ((calculationList.style.display === 'none' || calculationList.style.display === '') && (calculationTableRecepient.style.display === 'none' || calculationTableRecepient.style.display === '') && (calculationBtn.style.display === 'none' || calculationBtn.style.display === '')) {
		calculationList.style.display = 'block';
		calculationTableRecepient.style.display = 'block';
		calculationBtn.style.display = 'block';

		calculationLinkSpan.textContent = 'Показати менше';
		calculationTable.style.backgroundColor = 'rgba(241, 241, 241, 1)';
	} else {
		calculationList.style.display = 'none';
		calculationTableRecepient.style.display = 'none';
		calculationBtn.style.display = 'none';

		calculationLinkSpan.textContent = 'Показати більше';
		calculationTable.style.backgroundColor = 'rgba(0, 0, 0, 0)';

		calculation.scrollIntoView({ behavior: 'instant', block: 'start' });
	}
});

// =========================================================

const dispatcher = document.getElementById('dispatcher');

const dispatcherLink = document.querySelector('.dispatcher__link');
const dispatcherList = document.querySelector('.dispatcher__list-wrapper');
const linksDispatcher = document.querySelector('.dispatcher__links-wrapper');
const dispatcherBtn = document.querySelector('.dispatcher__buttons');

const dispatcherLinkSpan = document.querySelector('.dispatcher__link span');

dispatcherLink.addEventListener('click', () => {
	if ((dispatcherBtn.style.display === 'none' || dispatcherBtn.style.display === '') && (linksDispatcher.style.display === 'none' || linksDispatcher.style.display === '') && (dispatcherList.style.display === 'none' || dispatcherList.style.display === '')) {
		dispatcherBtn.style.display = 'flex';
		dispatcherList.style.display = 'block';
		linksDispatcher.style.display = 'block';

		dispatcherLinkSpan.textContent = 'Показати менше';
	} else {
		dispatcherBtn.style.display = 'none';
		dispatcherList.style.display = 'none';
		linksDispatcher.style.display = 'none';

		dispatcherLinkSpan.textContent = 'Показати більше';

		dispatcher.scrollIntoView({ behavior: 'instant', block: 'start' });
	}
});

// market ==================================================================

const marketCards = document.querySelectorAll('.market__card');
const marketLink = document.querySelector('.market__link');
const marketLinkSpan = document.querySelector('.market__link span');

marketLink.addEventListener('click', () => {
	for (let i = 0; i < marketCards.length; i++) {
		if (getComputedStyle(marketCards[i]).display === 'none') {
			marketCards[i].style.display = 'block';
			marketLinkSpan.textContent = 'Показати менше';
		} else {
			marketCards[i].style.display = '';
			marketLinkSpan.textContent = 'Показати більше';
		}
	}
});

// ========================================================

const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollTopBtn1 = document.getElementById("scrollTopBtn1");

window.addEventListener("scroll", function () {
	if (window.scrollY > 400) {
		scrollTopBtn.classList.add("show");
		scrollTopBtn.classList.remove("hide");
		scrollTopBtn1.classList.add("show");
		scrollTopBtn1.classList.remove("hide");
	} else {
		scrollTopBtn.classList.add("hide");
		scrollTopBtn1.classList.add("hide");
		setTimeout(() => {
			scrollTopBtn.classList.remove("show");
			scrollTopBtn1.classList.remove("show");
		}, 400);
	}
});

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===================================================================









