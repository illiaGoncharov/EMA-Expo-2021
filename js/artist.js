$(document).ready(function () {
	const pD = function(e) {
		e.preventDefault();
	};
    const hideOthers = function(item) {
        $('.artist__dropdown').not(item).addClass('artist__dropdown-hidden');
    }
    $('.artist > a').click(function (e) {
    	pD(e);
        $(this).siblings('.artist__dropdown').toggleClass('artist__dropdown-hidden');
        hideOthers($(this).siblings('.artist__dropdown'));
        e.target.scrollIntoView({ 
          behavior: 'smooth' 
        });
    });
    $('.partner a').click(function (e) {
    	e.preventDefault();
    });
});
