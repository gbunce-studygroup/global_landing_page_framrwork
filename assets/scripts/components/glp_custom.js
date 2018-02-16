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

// Jump link scroll script
$(document).ready(function(){
	$('.content_box a[href^="#"]').on('click',function (e){
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
		$('html, body').stop().animate({
		     'scrollTop': $target.offset().top
		}, 900, 'swing');
	});
});

//  SWAP ORDER OF THE IMAGE AND THE TITLE IN THE WIDGET COMPONENT
$('.widget img').each(function(){
    $(this).insertBefore( $(this).prev('h1, h2, h3, h4, h5, h6'));
});

// REVERSE ORDER OF THE FORM FIELDS IN RIGHT TO LEFT LANGUAGES
$('html:lang(ar-JO) .form-horizontal .form-group .col-md-7 .row, html:lang(fa-IR) .form-horizontal .form-group .col-md-7 .row').each(function(){
	var list = $(this);
	var listItems = list.children('[class*=col]');
	list.append(listItems.get().reverse());
});

// Normalize Carousel Heights of Bootstrap Carousel items.
$.fn.carouselHeights = function(){
    var items = $(this),
        heights = [],
        tallest;
    var normalizeHeights = function(){
        items.each(function(){
            heights.push($(this).height()); 
        });
        tallest = Math.max.apply(null, heights);
        items.each(function() {
            $(this).css('min-height',tallest + 'px');
        });
    };
    normalizeHeights();
    $(window).on('resize orientationchange', function (){
        tallest = 0;
        heights.length = 0;
        items.each(function(){
            $(this).css('min-height','0');
        }); 
        normalizeHeights();
    });
};
jQuery(function($){
    $(window).on('load', function(){
        $('.carousel .item').carouselHeights();
    });
});

// Get carousel-caption colour and apply it to .item
var carousel_caption = $('.carousel-caption')
var bg = carousel_caption.css('background-color')
var item = $('.item')
item.css({
  backgroundColor: bg
})

// Detect language select in the header and add class to body if it is present
if ($('header .language_links_v2').length > 0) { 
    $('#pageBody').addClass('language_select_added');
    $('.language_links_v2').parent().addClass('reset_position');
}