/*===================Preloader=========================*/
function loadData() {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000);
	})
}
loadData()
	.then(() => {
		let preloaderEl = document.getElementById('cube-loader');
		preloaderEl.classList.add('hidden');
		preloaderEl.classList.remove('visible');
	});
/*===================Latest works active button=========================*/
$(function () {
	$(".lates-works__buton-active").on('click', function () {
		$('.btn-outline-success ').removeClass('active')

		if ($(this).attr('aria-expanded') !== false) {
			$(this).addClass('active')
		}
	})
});

/*===================Scroll Spy=========================*/
let scrollSpy = new bootstrap.ScrollSpy(document.body, {
	target: '#navContent'
})
let dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
	bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
})

/*===================Animation=========================*/
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 1500);
}
/*===================Slider our team=========================*/
$(document).ready(function () {
$('.our-team__slider').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay: true,
	speed: 900,
	autoplaySpeed: 3000,
	arrows: false,
	accessibility: false,
	dots: true,
	responsive: [
		{
			breakpoint: 994,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 656,
			settings: {
				speed: 700,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});
})