// MAKES THE YOUTUBE VIDEO IN THE LIGHTBOX STOP PLAYING WHEN THE LIGHTBOX IS CLOSED
$(".modal").on('hidden.bs.modal', function (e) {
    $(this).find("iframe").attr("src", $(this).find("iframe").attr("src"));
});

// CLEARS THE GALLERY & TESTIMONIAL WHEN ITS IN A 8 OR 12 COLUMN GRID
$( ".col-md-12 .gallery, .col-md-8 .gallery, .col-md-12 .testimonial" ).append( "<div class='clearfix'/></div>" );

// STICKY NAV AFTER 300PX
$(window).scroll(function(){
	var set_affix = '300';
	if ($(this).scrollTop() > set_affix){  
		$("header .container .row. .col-md-6:last-child").addClass("affix");
	}
	else{
		$("header .container .row. .col-md-6:last-child").removeClass("affix");
	}
});

// REMOVE PADDING FROM SECTIONS IF NO COMOPNENTS OR ROWS ARE IN IT
$('.section.one > .container').each(function(){
    if($.trim($(this).html()) == '') $('.section.one').css('padding','0');
});
$('.section.two > .container').each(function(){
    if($.trim($(this).html()) == '') $('.section.two').css('padding','0');
});
$('.section.three > .container').each(function(){
    if($.trim($(this).html()) == '') $('.section.three').css('padding','0');
});

// REMOVE WIDGET CLASS IF PULLOUT CLASS IS ADDED
if ($('.widget').hasClass('pullout')){
    $('.pullout').removeClass('widget');
}

// insert div to match hero image scale
$( ".hero" ).prepend( "<div class='image_size_placeholder'/></div>" );

// Add / remove class names for widget / pullout flexbox styles
$(".row .widget, .row .pullout").parent().addClass('col_flex');
$(".col_flex").parent().addClass('row_flex');
$(".disable_flex").parent().removeClass('col_flex');


// Align carousel content to the middle of the content box
$( "[class*=col] > .carousel .carousel-caption" ).wrapInner( "<div class='vertical_align'></div>");
$( ".vertical_align" ).wrapInner( "<div class='vertical_align_inner'></div>");