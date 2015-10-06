var ypos,image;
function parallex () {
	ypos = window.pageYOffset;
	image = document.getElementById('image');
	image.style.top = ypos * .7 +'px';
}
window.addEventListener('scroll',parallex);
