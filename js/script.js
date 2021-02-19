$(function () {
	$(".lates-works__buton-active").on('click', function () {
		$('.btn-outline-success ').removeClass('active')

		if ($(this).attr('aria-expanded') !== false) {
			$(this).addClass('active')
		}
	})
});
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
	target: '#navContent'
})
var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
	bootstrap.ScrollSpy.getInstance(dataSpyEl)
		.refresh()
})