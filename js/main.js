
$(document).ready(function() {

  // $('.window').windows({
  //     snapping: true,
  //     snapSpeed: 500,
  //     snapInterval: 1100,
  //     onScroll: function(scrollPos){
  //         // scrollPos:Number
  //     },
  //     onSnapComplete: function($el){
  //         // after window ($el) snaps into place
  //     },
  //     onWindowEnter: function($el){
  //         // when new window ($el) enters viewport
  //     }
  // })
	$.scrollIt({
	  topOffset: -60           // offste (in px) for fixed top navigation
	});
	var headhesive = new Headhesive('.header', {
    // Scroll offset. Accepts Number or "String" (for class/ID)
    offset: 60, // OR — offset: '.classToActivateAt',

    // Custom classes
    classes: {

        // Cloned elem class
        clone: 'headhesive',

        // Stick class
        stick: 'headhesive--stick',

        // Unstick class
        unstick: 'headhesive--unstick'
    },

    // Throttle scroll event to fire every 250ms to improve performace
    throttle: 250,

    // Callbacks
    onInit: function() {},
    onStick: function() {},
    onUnstick: function() {},
    onDestroy: function() {},
});
  var menu = $('.centered-navigation-menu');
  var menuToggle = $('.centered-navigation-menu-button');

  $(menuToggle).on('click', function(e) {
  	console.log("click");
    e.preventDefault();
    $(this).slideToggle(function(){
    	console.log('slide-toggle');
      if(menu.is(':hidden')) {
      	console.log("thing");
        menu.removeAttr('style');
      }
    });

  });
  $('[data-scroll-nav]').click(function() {
  	menu.removeAttr('style');
  })
});

