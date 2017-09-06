// TO KEEP THE OUTPUT FILE SIZE DOWN COMMENT OUT COMPONENTS THAT DON'T GET USED
@import "components/affix.js";
@import "components/alert.js";
@import "components/button.js";
@import "components/carousel.js";
@import "components/collapse.js";
@import "components/dropdown.js";
@import "components/tab.js";
@import "components/transition.js";
@import "components/scrollspy.js";
//@import "components/sticky_header.js";
@import "components/modal.js";
@import "components/tooltip.js";
@import "components/popover.js";
@import "components/video_fallback_carousel.js";

// MAKES THE YOUTUBE VIDEO IN THE LIGHTBOX STOP PLAYING WHEN THE LIGHTBOX IS CLOSED
$(".modal").on('hidden.bs.modal', function (e) {
    $(this).find("iframe").attr("src", $(this).find("iframe").attr("src"));
});

// CLEARS THE GALLERY & TESTIMONIAL WHEN ITS IN A 8 OR 12 COLUMN GRID
$( ".col-md-12 .gallery, .col-md-8 .gallery, .col-md-12 .testimonial" ).append( "<div class='clearfix'/></div>" );
