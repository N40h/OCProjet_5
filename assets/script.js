const slides = [
	{
		image: 'slide1.jpg',
		tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
	},
	{
		image: 'slide2.jpg',
		tagLine:
			'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
	},
	{
		image: 'slide3.jpg',
		tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
	},
	{
		image: 'slide4.png',
		tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
	},
];

// Fleches interactives
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', () => console.log('worked left'));
arrowRight.addEventListener('click', () => console.log('worked right'));

// Bullet points
const dotsDiv = document.querySelector('.dots');
let currentSlide = 0;

function generateBulletPoints(slides) {
	for (let i = 0; i < slides.length; i++) {
		const bullet = document.createElement('span');
		bullet.className = 'dot';
		dotsDiv.appendChild(bullet);
	}
}

function updateDot() {
	const bullets = dotsDiv.querySelectorAll('.dot');
	bullets.forEach((bullet) => bullet.classList.remove('dot_selected'));

	bullets[currentSlide].classList.add('dot_selected');
	console.log(bullets);
}
generateBulletPoints(slides);
updateDot();
