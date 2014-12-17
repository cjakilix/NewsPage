$(document).foundation();

jQuery(function($){

/* SLIDER */
 
BigSlider.initBigSlider();

NewsModule.initNewsModule();

$('body').on('click','.add-image', function() {

        AjaxModule('http://demo0474378.mockable.io/testCecile', 'GET', 'JSON' );

    });//FIN ADD IMAGES


});/////////////////////Fin chargement JQuery

