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

// DOM Elements
const dotsDiv = document.querySelector('.dots');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImage = document.querySelector('.banner-img');
const bannerTagLine = document.querySelector('#banner p');

let currentSlide = 0;

// Bullet points function creation loop
function generateBulletPoints() {
	for (let i = 0; i < slides.length; i++) {
		const bullet = document.createElement('span');
		bullet.className = 'dot';
		dotsDiv.appendChild(bullet);
	}
}
generateBulletPoints();

// Variable for the updateDot function
const bullets = dotsDiv.querySelectorAll('.dot');
bullets[currentSlide].classList.add('dot_selected');

// Update function for the bullet points
function updateDot(index) {
	bullets.forEach((bullet) => bullet.classList.remove('dot_selected'));
	currentSlide = index;
	bullets[currentSlide].classList.add('dot_selected');
	bannerImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	bannerTagLine.innerHTML = slides[currentSlide].tagLine;
}

// Events listeners for arrows to switch slides
arrowLeft.addEventListener('click', () => {
	if (currentSlide === 0) {
		updateDot(slides.length - 1);
	} else {
		updateDot(currentSlide - 1);
	}
});

arrowRight.addEventListener('click', () => {
	if (currentSlide === slides.length - 1) {
		updateDot(0);
	} else {
		updateDot(currentSlide + 1);
	}
});
