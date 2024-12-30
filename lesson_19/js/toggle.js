const toggle = document.getElementById('toggle');
const hideClass = 'tabs__item--hide';
const tabs = document.querySelector('.tabs');


toggle.addEventListener('click', () => {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[0].classList.remove(hideClass);
    if (tabs.children[i].classList.contains(hideClass) == true) {
      tabs.children[i].classList.remove(hideClass);
    } else {
      tabs.children[i].classList.add(hideClass);
    }
  }
});