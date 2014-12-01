$(document).foundation();

jQuery(function($){

/* SLIDER */
 
var sliderModule = new BigSlider();
var newsModule = new NewsModule();
sliderModule.sliderFade();


    $('.dots').on('click',function(){

        /*sliderModule.navDot();*/

        var numDot = $(this).attr( "id" );
        var elem = numDot.split('dot');
        i= elem[1];
        i= i - 1 ;

        /*$('.dots').removeClass("dotsactive");
        $(this).addClass("dotsactive");*/


         sliderModule.sliderli.addClass("fadeout").removeClass("fadein");
         sliderModule.currentItem = sliderModule.sliderli.eq(i);
         sliderModule.currentItem.addClass("fadein").removeClass("fadeout");



    });


    $('.next').on('click',function(){ 
        
            sliderModule.next();
    });   


    $('.prev').on('click',function(){
            sliderModule.prev();

    });



/* AJAX ADD IMAGES */

    $('body').on('click','.add-image', function() {

        $.ajax({
            url : 'http://demo0474378.mockable.io/testCecile',
            type : 'GET',
            dataType: 'JSON',
            success : function(data, statut){ 


                var url1 = data.image1,
                    url2 = data.image2,
                    url3 = data.image3;

                $("<li class=\"fadeout\" ><img src='" + url1 + "' /></li>").appendTo("#slider ul");
                $("<li class=\"fadeout\"><img src='" + url2 + "' /></li>").appendTo("#slider ul");
                $("<li class=\"fadeout\"><img src='" + url3 + "' /></li>").appendTo("#slider ul");
                console.log('Call Ajax success');

                sliderModule.updateValues();


            },// Fin success
               
            error : function(resultat, statut, erreur){
                $('<span> > Une erreur s\'est produite</span>').appendTo(".add-image");
                console.log('Erreur Call Ajax');

            }

        }); //FIN Ajax call

    });//FIN ADD IMAGES


/* NEWS */

//Ajouter des news
$('body').on('click','#add-article', function(){
    
    newsModule.addNews();

    return false;
});

//Modifier des news
$('body').on('click','.modify-article', function(){
    
    newsModule.modifyNews.call(this);

    return false;
});





});/////////////////////Fin chargement JQuery






////////////////// Commentaires apprentissage

//Automatisation s'il n'y avait que des images
               /*$.each( data, function( key, val ) {
                $("<img src='" + val + "' />" ).appendTo("#slider").addClass('fadeout'); //"<li id='" + key + "' ><img src='" + val + "' /></li>"
            });*/
                //Ajouter le nombre de dots en fontion du nombre de data
                /*$.each( data, function( key, val ) {
                $("<span></span>").appendTo(".nav").addClass('dots'); //"<li id='" + key + "' ><img src='" + val + "' /></li>"
            });*/


                // En passant par un tableau

               /*$.each( data, function( key, val ) {
                items.push( "<img src='" + val + "' />" ); //"<li id='" + key + "' ><img src='" + val + "' /></li>"
            });
               */