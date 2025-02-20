"use strict"

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

// webinars ===================================================================

document.querySelectorAll('.card-webinars--registered .card-webinars__btn').forEach(item => {
	item.textContent = 'Приєднатися';
});


const webinarsCards = document.querySelectorAll('.card-webinars');

webinarsCards.forEach((card) => {
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

// contract =============================================================================

const contractStatus = document.querySelectorAll('.card-contract--closed .card-contract__status');

contractStatus.forEach(item => {
	item.textContent = 'Закритий';
});

document.querySelectorAll('.card-contract').forEach(card => {
	const toggle = card.querySelector('.card-contract__toggle');
	toggle.addEventListener('click', () => {
		card.classList.toggle('contract-open');
	});
});

// staff ===============================================================

const staff = document.getElementById('staff');
const staffHidden = document.querySelector('.staff__inner-body');
const staffBtn = document.querySelector('.staff__btn');

// calculation =======================================================================

const calculationList = document.querySelector('.calculation__list-wrapper');
const calculationTable = document.querySelector('.calculation__table-wrapper');
const calculationTableRecepient = document.querySelector('.calculation__tb-reciept-wrapper');
const calculationBtn = document.querySelector('.calculation__buttons');
const calculation = document.getElementById('calculation');

// dispatcher =========================================================

const dispatcher = document.getElementById('dispatcher');
const dispatcherList = document.querySelector('.dispatcher__list-wrapper');
const linksDispatcher = document.querySelector('.dispatcher__links-wrapper');
const dispatcherBtn = document.querySelector('.dispatcher__buttons');

// market ==================================================================

const marketCards = document.querySelectorAll('.market__card');

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

function documentClick(e) {
	const elementTarget = e.target;
	// legal-aid form button change background =============================
	if (elementTarget.closest('.btn-form') && e.type === 'click') {
		formBtn.classList.toggle('btn-form--onclick');
	}
	// show more webinars cards ===========================================
	if (elementTarget.closest('.webinars__btn') && e.type === 'click') {
		for (let i = 0; i < webinarsCards.length; i++) {
			if (getComputedStyle(webinarsCards[i]).display === 'none') {
				webinarsCards[i].style.display = 'flex';
				elementTarget.textContent = 'Показати менше';
			} else {
				webinarsCards[i].style.display = '';
				elementTarget.textContent = 'Показати більше';
				webinars.scrollIntoView({ behavior: 'instant', block: 'start' });
			}
		}
	}
	// staff show more info =============================================
	if (elementTarget.closest('.staff__link') && e.type === 'click') {

		if ((staffHidden.style.display === 'none' || staffHidden.style.display === '') && (staffBtn.style.display === 'none' || staffBtn.style.display === '')) {
			staffHidden.style.display = 'block';
			staffBtn.style.display = 'block';

			elementTarget.textContent = 'Показати менше';
		} else {
			staffHidden.style.display = 'none';
			staffBtn.style.display = 'none';

			elementTarget.textContent = 'Показати більше';
			staff.scrollIntoView({ behavior: 'instant', block: 'start' });
		}
	}
	// calculation show more info =========================================
	if (elementTarget.closest('.calculation__link') && e.type === 'click') {
		if ((calculationList.style.display === 'none' || calculationList.style.display === '') && (calculationTableRecepient.style.display === 'none' || calculationTableRecepient.style.display === '') && (calculationBtn.style.display === 'none' || calculationBtn.style.display === '')) {
			calculationList.style.display = 'block';
			calculationTableRecepient.style.display = 'block';
			calculationBtn.style.display = 'block';

			elementTarget.textContent = 'Показати менше';
			calculationTable.style.backgroundColor = 'rgba(241, 241, 241, 1)';
		} else {
			calculationList.style.display = 'none';
			calculationTableRecepient.style.display = 'none';
			calculationBtn.style.display = 'none';

			elementTarget.textContent = 'Показати більше';
			calculationTable.style.backgroundColor = 'rgba(0, 0, 0, 0)';

			calculation.scrollIntoView({ behavior: 'instant', block: 'start' });
		}
	}
	// dispatcher show more info =============================================
	if (elementTarget.closest('.dispatcher__link') && e.type === 'click') {
		if ((dispatcherBtn.style.display === 'none' || dispatcherBtn.style.display === '') && (linksDispatcher.style.display === 'none' || linksDispatcher.style.display === '') && (dispatcherList.style.display === 'none' || dispatcherList.style.display === '')) {
			dispatcherBtn.style.display = 'flex';
			dispatcherList.style.display = 'block';
			linksDispatcher.style.display = 'block';

			elementTarget.textContent = 'Показати менше';
		} else {
			dispatcherBtn.style.display = 'none';
			dispatcherList.style.display = 'none';
			linksDispatcher.style.display = 'none';

			elementTarget.textContent = 'Показати більше';

			dispatcher.scrollIntoView({ behavior: 'instant', block: 'start' });
		}
	}
	// market show all cards =======================================
	if (elementTarget.closest('.market__link') && e.type === 'click') {
		for (let i = 0; i < marketCards.length; i++) {
			if (getComputedStyle(marketCards[i]).display === 'none') {
				marketCards[i].style.display = 'block';
				elementTarget.textContent = 'Показати менше';
			} else {
				marketCards[i].style.display = '';
				elementTarget.textContent = 'Показати більше';
			}
		}
	}
}

document.addEventListener('click', documentClick);









