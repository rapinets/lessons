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

if (subLinks.length > 0) {
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

// ===================================================================

const webinarsCard = document.querySelectorAll('.card-webinars--registered .card-webinars__btn');
webinarsCard.forEach(item => {
	item.textContent = 'Приєднатися';
});

const cardsWebinars = document.querySelectorAll('.card-webinars');
const webinarsBtn = document.querySelector('.webinars__btn');
const webinarsBtnSpan = document.querySelector('.webinars__btn span');

window.addEventListener('resize', () => {
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
				}
			});
		}
	}
});

// =============================================================================

const contractStatus = document.querySelectorAll('.card-contract--closed .card-contract__status');

contractStatus.forEach(item => {
	item.textContent = 'Закритий';
});

// ==========================================================

function movePriceBlocks() {
	document.querySelectorAll('.card-webinars').forEach(card => {
		const price = card.querySelector('.card-webinars__price');
		const datetime = card.querySelector('.card-webinars__part');
		const webinarsToggle = card.querySelector('.card-webinars__toggle');
		const webinarsBtn = card.querySelector('.card-webinars__btn');

		if (window.innerWidth <= 768) {
			datetime.parentNode.insertBefore(price, datetime);
			webinarsToggle.addEventListener('click', () => {
				if (card.classList.contains('card-webinars--registered')) {
					card.classList.toggle('registered-open');
				} else {
					card.classList.toggle('webinars-open');
				}
				if (card.classList.contains('registered-open')) {
					webinarsBtn.textContent = 'ZOOM';
				}
			});
		}
	});
}

movePriceBlocks();

window.addEventListener('resize', movePriceBlocks);

// =====================================================================

document.querySelectorAll('.card-contract').forEach(card => {
	const toggle = card.querySelector('.card-contract__toggle');
	toggle.addEventListener('click', () => {
		card.classList.toggle('contract-open');
	});
});

// ===============================================================

const staffRegulatoryList = document.querySelector('.staff__regulatory-list-wrapper');
const graphStaff = document.querySelector('.staff__inner');
const staffBtn = document.querySelector('.staff__btn');
const staffLink = document.querySelector('.staff__link');
const staffLinkSpan = document.querySelector('.staff__link span');

window.addEventListener('resize', () => {
	if (window.innerWidth <= 768) {
		staffRegulatoryList.classList.add('hide');
		graphStaff.classList.add('hide');
		staffBtn.classList.add('hide');
	} else {
		staffRegulatoryList.classList.remove('hide');
		graphStaff.classList.remove('hide');
		staffBtn.classList.remove('hide');
	}
});

staffLink.addEventListener('click', () => {
	if (staffRegulatoryList.classList.contains('hide') && graphStaff.classList.contains('hide') && staffBtn.classList.contains('hide')) {
		staffRegulatoryList.classList.remove('hide');
		graphStaff.classList.remove('hide');
		staffBtn.classList.remove('hide');

		staffLinkSpan.textContent = 'Показати менше';
	} else {
		staffRegulatoryList.classList.add('hide');
		graphStaff.classList.add('hide');
		staffBtn.classList.add('hide');

		staffLinkSpan.textContent = 'Показати більше';
	}
});


// =======================================================================

const calculationLink = document.querySelector('.calculation__link');
const calculationList = document.querySelector('.calculation__list-wrapper');
const calculationTable = document.querySelector('.calculation__table-wrapper');
const calculationTableRecepient = document.querySelector('.calculation__tb-reciept-wrapper');
const calculationBtn = document.querySelector('.calculation__buttons');

const calculationLinkSpan = document.querySelector('.calculation__link span')

window.addEventListener('resize', () => {
	if (window.innerWidth <= 768) {
		calculationList.classList.add('hide');
		calculationTableRecepient.classList.add('hide');
		calculationBtn.classList.add('hide');
	} else {
		calculationList.classList.remove('hide');
		calculationTableRecepient.classList.remove('hide');
		calculationBtn.classList.remove('hide');
	}
});

calculationLink.addEventListener('click', () => {
	if (calculationList.classList.contains('hide') && calculationTableRecepient.classList.contains('hide') && calculationBtn.classList.contains('hide')) {
		calculationList.classList.remove('hide');
		calculationTableRecepient.classList.remove('hide');
		calculationBtn.classList.remove('hide');

		calculationLinkSpan.textContent = 'Показати менше';

		calculationTable.style.backgroundColor = 'rgba(241, 241, 241, 1)';
	} else {
		calculationList.classList.add('hide');
		calculationTableRecepient.classList.add('hide');
		calculationBtn.classList.add('hide');

		calculationLinkSpan.textContent = 'Показати більше';

		calculationTable.style.backgroundColor = 'rgba(0, 0, 0, 0)';
	}
});

// =========================================================

const dispatcherLink = document.querySelector('.dispatcher__link');
const dispatcherList = document.querySelector('.dispatcher__list');
const linksDispatcher = document.querySelector('.dispatcher__links');
const dispatcherBtnDark = document.querySelector('.dispatcher__btn-dark');
const dispatcherBtnLight = document.querySelector('.dispatcher__btn-light');

const dispatcherListStyle = getComputedStyle(dispatcherList).display;
const linksDispatcherStyle = getComputedStyle(linksDispatcher).display;
const dispatcherBtnDarkStyle = getComputedStyle(dispatcherBtnDark).display;
const dispatcherBtnLightStyle = getComputedStyle(dispatcherBtnLight).display;

dispatcherLink.addEventListener('click', () => {
	if (dispatcherBtnDarkStyle == 'none' && linksDispatcherStyle == 'none' && dispatcherListStyle == 'none' && dispatcherBtnLightStyle == 'none') {
		dispatcherBtnDark.style.display = 'block';
		dispatcherList.style.display = 'flex';
		linksDispatcher.style.display = 'flex';
		dispatcherBtnLight.style.display = 'block';

		dispatcherLink.style.display = 'none';
	}
});

// ==================================================================

const marketCards = document.querySelectorAll('.market__card');
const marketLink = document.querySelector('.market__link');
const marketLinkSpan = document.querySelector('.market__link span');
console.log(marketCards)
window.addEventListener('resize', () => {
	for (let i = 3; i < marketCards.length; i++) {
		if (window.innerWidth <= 768) {
			marketCards[i].classList.add('hide');
			marketLink.addEventListener('click', () => {
				if (marketCards[i].classList.contains('hide')) {
					marketCards[i].classList.remove('hide');
					marketLinkSpan.textContent = 'Показати менше';
				} else {
					marketCards[i].classList.add('hide');
					marketLinkSpan.textContent = 'Показати більше';
				}
			});
		}
	}
});

// ========================================================

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
	if (window.scrollY > 400) {
		scrollTopBtn.classList.add("show");
		scrollTopBtn.classList.remove("hide");
	} else {
		scrollTopBtn.classList.add("hide");
		setTimeout(() => {
			scrollTopBtn.classList.remove("show");
		}, 400);
	}
});

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===================================================================









