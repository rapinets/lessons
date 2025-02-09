"use strict"

// const subMenu = document.querySelectorAll('.menu__inner');

// if (subMenu.length > 0) {
// 	for (let i = 0; i < subMenu.length; ++i) {
// 		subMenu[i].parentElement.addEventListener('click', function () {
// 			subMenu[i].classList.toggle('hide');
// 		});
// 	}
// }

const subMenus = document.querySelectorAll('.menu__inner');

if (subMenus.length > 0) {
	subMenus.forEach(subMenu => {
		const parent = subMenu.parentElement; // Використовуємо найближчий елемент, а не просто parentElement

		if (parent) {
			parent.addEventListener('click', function (event) {
				// Закриваємо всі інші підменю
				subMenus.forEach(menu => {
					if (menu !== subMenu) {
						menu.classList.add('hide');
					}
				});

				// Перемикаємо поточне підменю
				subMenu.classList.toggle('hide');

				// Зупиняємо подальше спливання подій (щоб не закрити меню при кліку на його вміст)
				event.stopPropagation();
			});
		}
	});
}

// Закриваємо всі підменю при кліку поза ними
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

// mobail menu ====================================
// let documentActions = (e) => {
// 	const targetElement = e.target;

// 	if (targetElement.closest('.burger-icon')) {
// 		document.documentElement.classList.toggle('open-menu');
// 	}
// }

// document.addEventListener('click', documentActions);

// ===================================================================

const webinarsCard = document.querySelectorAll('.card-webinars--registered .card-webinars__btn');
webinarsCard.forEach(item => {
	item.textContent = 'Приєднатися';
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
		const datetime = card.querySelector('.card-webinars__datetime');
		const webinarsToggle = card.querySelector('.card-webinars__toggle');
		const webinarsBtn = card.querySelector('.card-webinars__btn');

		if (window.innerWidth < 768) {
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

const calculationLink = document.querySelector('.calculation__link');
const calculationList = document.querySelector('.list-calculation');
const calculationTable = document.querySelector('.calculation__table-wrapper');
const calculationTableRecepient = document.querySelector('.calculation__tb-reciept-wrapper');
const calculationBtnDark = document.querySelector('.calculation__btn-dark');
const calculationBtnLight = document.querySelector('.calculation__btn-light');

const calculationListStyle = getComputedStyle(calculationList).display;
const calculationTableRecepientStyle = getComputedStyle(calculationTableRecepient).display;
const calculationBtnDarkStyle = getComputedStyle(calculationBtnDark).display;
const calculationBtnLightStyle = getComputedStyle(calculationBtnLight).display;

const calculationTableStyle = getComputedStyle(calculationTable).backgroundColor;

calculationLink.addEventListener('click', () => { });

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

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
	if (window.scrollY > 300) {
		scrollTopBtn.classList.add("show");
		scrollTopBtn.classList.remove("hide");
	} else {
		scrollTopBtn.classList.add("hide");
		setTimeout(() => {
			scrollTopBtn.classList.remove("show");
		}, 300);
	}
});

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}








