$(document).foundation();

jQuery(function($){
    
/*
SLIDER
*/

var $slider = $('#slider'), // Ciblage bloc slider
    $img = $('#slider img'), // Ciblage des balise img du slider
    indexImg = $img.length - 1, // Définir l'index
    i = 0, // Initilise le compteur
    $currentImg = $img.eq(i); // Ciblage de l'image courante (index à 0)
    console.log('img.length: ' + $img.length);


    $img.addClass("fadeout"); // Cacher les images
    $currentImg.addClass( "fadein" ); // Afficher seulement image courante

    $.each($img, function() {
        $("<span id='dot" + (i+1) + "' class='dots'></span>").appendTo(".nav");
        i++;
    });



    $('.next').click(function(){ 

        i++; // incrémente le compteur
        $img.addClass("fadeout").removeClass("fadein"); // on cache les images

        if( i > indexImg ){
            i = 0;
        }

        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.addClass("fadein").removeClass("fadeout"); // puis on l'affiche

    });

    $('.prev').click(function(){

        i--; // Décrémente le compteur
        $img.addClass("fadeout").removeClass("fadein");

        if( i < 0 ){
            
            i = indexImg;
        }

        $currentImg = $img.eq(i);
        $currentImg.addClass("fadein").removeClass("fadeout");
    });

    $('.dots').click(function() {

        var numDot = $(this).attr( "id" );
            /*console.log(numDot);*/
        var elem = numDot.split('dot');
        i= elem[1];
        i= i - 1 ;

        /*i = 0;*/
        $img.addClass("fadeout").removeClass("fadein");
        $currentImg = $img.eq(i);
        $currentImg.addClass("fadein").removeClass("fadeout");

    });

    function slideImg(){
        setTimeout(function(){
                            
            if(i < indexImg){ // si le compteur est inférieur au dernier index
            i++; // on l'incrémente
        }
        else{ // sinon, on le remet à 0 (première image)
            i = 0;
        }

        $img.addClass("fadeout").removeClass("fadein");

        $currentImg = $img.eq(i);
        $currentImg.addClass("fadein").removeClass("fadeout");


        slideImg();

        }, 7000);
    }


    $(".add-image").click(function() {

        var items = [];


        $.ajax({
            url : 'http://demo0474378.mockable.io/testCecile',
            type : 'GET',
            dataType: 'JSON',
            success : function(data, statut){ 

               //Automatisation s'il n'y avait que des images
               /*$.each( data, function( key, val ) {
                $("<img src='" + val + "' />" ).appendTo("#slider").addClass('fadeout'); //"<li id='" + key + "' ><img src='" + val + "' /></li>"
                });*/
                //Ajouter le nombre de dots en fontion du nombre de data
                /*$.each( data, function( key, val ) {
                $("<span></span>").appendTo(".nav").addClass('dots'); //"<li id='" + key + "' ><img src='" + val + "' /></li>"
                });*/

                //On ne récupère que les images une à une
                var     url1 = data.image1,
                        url2 = data.image2,
                        url3 = data.image3;

               $("<img src='" + url1 + "' />" ).appendTo("#slider").addClass('fadeout');
               $("<img src='" + url2 + "' />" ).appendTo("#slider").addClass('fadeout');
               $("<img src='" + url3 + "' />" ).appendTo("#slider").addClass('fadeout');
               console.log('Call Ajax success');

                // En passant par un tableau
               
               /*$.each( data, function( key, val ) {
                items.push( "<img src='" + val + "' />" ); //"<li id='" + key + "' ><img src='" + val + "' /></li>"
            });
               $(items[1]).appendTo("#slider").addClass('fadeout');
               $(items[2]).appendTo("#slider").addClass('fadeout');
               slideImg();*/


               /*$(items.join( "" )).appendTo( "#slider" );*/

           },
           // Possibilité de réjouter des cas
           
            error : function(resultat, statut, erreur){
            $('<span> > Une erreur s\'est produite</span>').appendTo(".add-image");
            alert('Erreur Call Ajax');

            }/*,
            
        complete : function(resultat, statut){
                

            } */
   });

});


});
