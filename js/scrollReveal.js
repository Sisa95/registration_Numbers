function scrollReveal() {
	var revealPoint = 150;
	var revealElement = document.querySelectorAll(".demo"); //select class
	for (var i = 0; i < revealElement.length; i++) { //iterate over the selected class element
		var windowHeight = window.innerHeight;
		var revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
		} else {
			revealElement[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", scrollReveal);
scrollReveal();

