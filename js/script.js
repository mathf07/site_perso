
function parallax () {
	var background = document.querySelectorAll('div[data-type="background"]');
	for (var image = 0; image < background.length; image++) {
		var ypos = (-window.pageYOffset / background[image].getAttribute('data-speed'));
		background[image].style.backgroundPosition = '50% '+ ypos +'px';
		// var coords = '50% '+ ypos +'px';
	}
}


function parallaxTop () {
	var ypos = window.pageYOffset;
	var image = document.getElementById('image');
	image.style.top = ypos * .7 +'px';
}


function opacity () {
	var navbar = document.getElementById('navbar');
	if (window.pageYOffset > 500) {
		navbar.classList.add("opaque");
	} else {
		navbar.classList.remove("opaque");
	}
}

window.onload = (function (){
  window.addEventListener('scroll', parallaxTop);
  window.addEventListener('scroll', opacity);
  window.addEventListener('scroll', parallax);
})
