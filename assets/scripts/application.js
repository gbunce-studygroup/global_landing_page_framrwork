//  SWAP ORDER OF THE IMAGE AND THE TITLE IN THE WIDGET COMPONENT
$('.widget img').each(function(){
    $(this).insertBefore( $(this).prev('h1, h2, h3, h4, h5, h6'));
});