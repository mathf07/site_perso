
function opacity () {
	var navbar = document.getElementById('navbar');
	if (window.pageYOffset > 90) {
		navbar.classList.add("opaque");
	} else {
		navbar.classList.remove("opaque");
	}
}

window.onload = (function (){
  window.addEventListener('scroll', opacity);
})



