window.addEventListener('resize', function() {
  location.reload();
});

const projects = document.querySelectorAll('[proj]')

if(window.innerWidth <= 920 && window.innerWidth >= 800) {
	projects.forEach(p => {
		const parentClasses = p.parentElement.classList
		parentClasses.remove("col-four");
		parentClasses.add("col-five");
	})
}