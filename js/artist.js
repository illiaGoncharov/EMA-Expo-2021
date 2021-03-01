$(document).ready(function () {
	const pD = function(e) {
		e.preventDefault();
	};
    $('.artist > a').click(function (e) {
    	pD(e);
    	$(!this && '.artist__dropdown').addClass('artist__dropdown-hidden');
    	$(this).siblings('.artist__dropdown').removeClass('artist__dropdown-hidden'); 
    });
    $('.partner a').click(function (e) {
    	e.preventDefault();
    });
});
