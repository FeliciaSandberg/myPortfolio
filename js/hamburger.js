const hamburger = document.querySelector('.hamburger');
const lineOne = hamburger.querySelector('.line-one');
const lineTwo = hamburger.querySelector('.line-two');
const lineThree = hamburger.querySelector('.line-three');

const lines = [lineOne, lineTwo, lineThree];

const toggleMenu = new TimelineMax({paused: true, reversed: true});


toggleMenu
.to(lineTwo, .125, {scaleX: 0})
.to(lineOne, .125, {transformOrigin: "50% 50%", y: 8}, "slide")
.to(lineThree, .125, {transformOrigin: "50% 50%", y: -8}, "slide")
.to(hamburger, .2, {rotation: 360})
.to(lineOne, .25, {rotation: 45}, "cross")
.to(lineThree, .25, {rotation: -45}, "cross");

hamburger.addEventListener('click', () => {
	toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
})