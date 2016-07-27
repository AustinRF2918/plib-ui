console.log("Initialized JS");

$(document).ready(function(){
    $('.dropdown-toggle').click(function(){
	$('.dropdown-contents').toggleClass("dropdown-hidden");
    });
});

$(document).ready(function(){
    $('.manage-toggle').click(function(){
	if (!$('.manage.toggle').hasClass("manage-hidden")) {
	    if (!$('.mobile-deck-contents').hasClass('.mobile-deck-hidden')) {
	      $('.mobile-deck-contents').addClass("mobile-deck-hidden");
	    }
	}
	$('.manage-contents').toggleClass("manage-hidden");
    });
});

$(document).ready(function(){
    $('.mobile-deck-toggle').click(function(){
	$('.mobile-deck-contents').toggleClass("mobile-deck-hidden");
    });
});
