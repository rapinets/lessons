"use strict"

const subMenu = document.querySelectorAll('.menu__inner');

for (let i = 0; i < subMenu.length; ++i) {
	window.addEventListener('resize', () => {
		if (window.innerWidth <= 992) {
			subMenu[i].parentElement.addEventListener('click', function () {
				subMenu[i].classList.toggle('hide');
			});
		}
	});
}

// mobail menu ====================================
let documentActions = (e) => {
	const targetElement = e.target;

	if (targetElement.closest('.burger-icon')) {
		document.documentElement.classList.toggle('open-menu');
	}
}

document.addEventListener('click', documentActions);


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








