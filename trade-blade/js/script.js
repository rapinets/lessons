// Строгий режим
"use strict"

window.addEventListener('load', windowLoad);
const html = document.documentElement;

function windowLoad() {
	document.addEventListener('click', documentActions);
	document.addEventListener('keydown', documentActions);
	html.classList.add('loaded');
	scrollActions();
}
function documentActions(e) {
	const type = e.type
	const targetElement = e.target

	if (type === 'click') {
		// Меню-бургер
		if (targetElement.closest('.icon-menu')) {
			html.classList.toggle('menu-open');
		}
		targetElement.closest('.menu__link') && html.classList.contains('menu-open') ? html.classList.remove('menu-open') : null

		// Попап
		// Закриття
		if (document.querySelector('.popup--open') && (!targetElement.closest('.body-popup') || targetElement.closest('.body-popup__close'))) {
			popupClose()
		}
		// Відкриття
		if (targetElement.closest('[data-popup]')) {
			const curentElement = targetElement.closest('[data-popup]')
			popupOpen(curentElement)
		}
		// menu
		if (targetElement.closest('[data-goto]')) {
			const curentElement = targetElement.closest('[data-goto]');
			const gotoBlock = document.querySelector(curentElement.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		}
		// spoller
		if (targetElement.closest('summary')) {
			e.preventDefault()

			const spollerTitle = targetElement.closest('summary')
			const spoller = spollerTitle.closest('details')
			const spollerBody = spollerTitle.nextElementSibling


			!spollerBody.hidden ?
				spoller.classList.contains('--active') ? setTimeout(() => { spollerBody.hidden = true }, 500) : spollerBody.hidden = true
				: null

			!spoller.open ? spoller.open = true : setTimeout(() => { spoller.open = false }, 500)

			_slideToggle(spollerBody)

			spoller.classList.toggle('--active')
		}
	} else if (type === 'keydown') {
		const key = e.key
		if (key === 'Escape') {
			document.querySelector('.popup--open') ? popupClose() : null
			// ....
		}
	}
}

function popupClose() {
	const curentPopup = document.querySelector('.popup--open')
	curentPopup.classList.remove('popup--open')
	setTimeout(() => {
		bodyLock(false)
	}, 500);
}
function popupOpen(curentElement) {
	const curentPopup = document.querySelector(curentElement.dataset.popup)
	if (curentPopup) {
		bodyLock(true)
		curentPopup.classList.add('popup--open')
	} else {
		console.log('Такого попапу не існує')
	}
}

function bodyLock(mode) {
	let lockPaddingValue = (window.innerWidth - document.body.offsetWidth) + 'px'
	lockPaddingValue = mode ? lockPaddingValue : 0;
	document.body.style.paddingInlineEnd = lockPaddingValue

	const paddingLockElements = document.querySelectorAll('[data-pl]')
	paddingLockElements.forEach(paddingLockElement => {
		if (paddingLockElement.dataset.pl === 'inset') {
			paddingLockElement.style.insetInlineEnd = lockPaddingValue;
		} else {
			paddingLockElement.style.paddingInlineEnd = lockPaddingValue;
		}
	});

	document.documentElement.classList.toggle('lock', mode);
}

function removeAuthButtons() {
	const authButtons = document.querySelector('.actions-header__auth');
	const menu = document.getElementById('menu');
	const actionsHeader = document.querySelector('.actions-header');
	if (window.innerWidth <= 767.98) {
		menu.insertAdjacentElement("afterend", authButtons);
	} else {
		actionsHeader.insertAdjacentElement("afterbegin", authButtons);
	}
}

removeAuthButtons();
window.addEventListener('resize', removeAuthButtons);

function scrollActions() {

	const options = {
		root: null,
		rootMargin: "0px 0px 0px 0px",
		threshold: 0.2,
	}
	const callback = (entries, observer) => {
		entries.forEach(entry => {
			const currentElement = entry.target
			if (entry.isIntersecting) {
				currentElement.classList.add('--animate')
			} else {
				//currentElement.classList.remove('--animate')
			}
		})
	}
	const observer = new IntersectionObserver(callback, options)

	const animElements = document.querySelectorAll('[class*="--anim"]')

	animElements.forEach(animElement => {
		observer.observe(animElement)
	})
}

// ==============================================================================

let _slideUp = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = `${target.offsetHeight}px`;
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = !showmore ? true : false;
			!showmore ? target.style.removeProperty('height') : null;
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			!showmore ? target.style.removeProperty('overflow') : null;
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
			// Створюємо подію 
			document.dispatchEvent(new CustomEvent("slideUpDone", {
				detail: {
					target: target
				}
			}));
		}, duration);
	}
}
let _slideDown = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.hidden = target.hidden ? false : null;
		showmore ? target.style.removeProperty('height') : null;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
			// Створюємо подію
			document.dispatchEvent(new CustomEvent("slideDownDone", {
				detail: {
					target: target
				}
			}));
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}


