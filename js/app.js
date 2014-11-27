$(document).foundation();

jQuery(function($){

/* SLIDER */
    //Variable générales
    var $slider = $('#slider'),
    $sliderli = $('#slider li'),
    $nbrli = $sliderli.length,
    nbrliIndex = $nbrli -1,
    i=0,
    $currentItem = $('#slider li').eq(i); // le i étant réinit à 0 ci-dessus, la première image est à index 0

    console.log('Nombre de li/image: ' + $nbrli);
    console.log('Nombre de li/Index: ' + nbrliIndex);

    $.each($sliderli, function() {
        $("<span id='dot" + (i+1) + "' class='dots'></span>").appendTo(".nav");
        i++;
    });


    $sliderli.addClass('fadeout').removeClass('fadein');
    $currentItem.addClass('fadein').removeClass('fadeout');
    console.log('Item courrant: ' + $currentItem);
        


    // Navigation dots
    $('.dots').click(function(){

        var numDot = $(this).attr( "id" );
        var elem = numDot.split('dot');
        i= elem[1];
        i= i - 1 ;

        /*i = 0;*/
         $sliderli.addClass("fadeout").removeClass("fadein");
        $currentItem = $sliderli.eq(i);
        $currentItem.addClass("fadein").removeClass("fadeout");

    });


    $('.next').click(function(){ 
        i++; // incrémente le compteur
        $sliderli.addClass("fadeout").removeClass("fadein"); // on cache les images

        if( i > nbrliIndex ){
            i = 0;
        }

        $currentItem = $sliderli.eq(i); // on définit la nouvelle image
        $currentItem.addClass("fadein").removeClass("fadeout"); // puis on l'affiche

    });   


    $('.prev').click(function(){

        i--; // Décrémente le compteur
        $sliderli.addClass("fadeout").removeClass("fadein");

        if( i < 0 ){

            i = nbrliIndex;
        }

        $currentItem = $sliderli.eq(i);
        $currentItem.addClass("fadein").removeClass("fadeout");
    }); 



    function sliderFade(){
        setTimeout(function(){

            if(i < nbrliIndex){ // si le compteur est inférieur au dernier index
            i++; // on l'incrémente
            }
            else{ // sinon, on le remet à 0 (première image)
                i = 0;
            }

        $sliderli.addClass("fadeout").removeClass("fadein");

        $currentItem = $sliderli.eq(i);
        $currentItem.addClass("fadein").removeClass("fadeout");


        sliderFade();

        }, 3000);
    };  // fin SLIDER

sliderFade();


/* AJAX ADD IMAGES */

    $(".add-image").click(function() {

        var items = [];


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
                /*console.log('Call Ajax success');*/

            },// Fin success
               
            error : function(resultat, statut, erreur){
                $('<span> > Une erreur s\'est produite</span>').appendTo(".add-image");
                alert('Erreur Call Ajax');

            }

        }); //FIN Ajax call

    });//FIN ADD IMAGES

});//Fin chargement JQuery



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