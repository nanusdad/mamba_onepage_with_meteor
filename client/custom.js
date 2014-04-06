Template.menu.rendered = function () {
	$( '#dl-menu' ).dlmenu();
	$('ul.dl-menu li a').smoothScroll();


	//animation
	new WOW().init();
	// ...
};

Template.menu.events({
	'click #dl-menu': function () {
		// ...
		console.log('hello');
		$( '#dl-menu' ).dlmenu();
		$('ul.dl-menu li a').smoothScroll();
	}
});
 