$(document).ready(function(){
	$('.button-list').on('click', function(){
		/* console.log(this); */
		$(this).children('.plus-symbol').toggleClass('rotate-45');
		$(this).toggleClass('black-text');
	})
});
