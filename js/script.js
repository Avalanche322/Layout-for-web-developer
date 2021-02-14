$(function () {
	$(".lates-works__buton-active").on('click', function () {
		$('.btn-outline-success ').removeClass('active')

		if ($(this).attr('aria-expanded') !== false) {
			$(this).addClass('active')
		}
	})
});