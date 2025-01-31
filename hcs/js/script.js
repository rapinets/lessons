

// mobail menu ====================================
let documentActions = (e) => {
	const targetElement = e.target;

	if (targetElement.closest('.burger-icon')) {
		document.documentElement.classList.toggle('open-menu');
	}
}

document.addEventListener('click', documentActions);

// slider =============================================
document.getElementById('next').onclick = function () {
	let lists = document.querySelectorAll('.card-humor');
	document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function () {
	let lists = document.querySelectorAll('.card-humor');
	document.getElementById('slide').prepend(lists[lists.length - 1]);
}




