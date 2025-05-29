// accordion 
const buttonActive = document.querySelectorAll('.tab-content button')
buttonActive.forEach(button => button.onclick = () => location.href='#contacts')
const tabs = document.querySelectorAll('.tab');
const titles = document.querySelectorAll('.tab-title');

titles.forEach((event) => { event.addEventListener('click', () => {
  if (!event.classList.contains('active')) {
    tabs.forEach(i => i.classList.remove('active'));
    titles.forEach(i => i.classList.remove('active'));
  } 
	event.classList.toggle('active');
	event.parentElement.classList.toggle('active');
  });
});
