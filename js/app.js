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

    /*$img.css('display', 'none'); //
    $currentImg.css('display', 'block'); //*/

    $img.addClass("fadeout"); // Cacher les images
    $currentImg.addClass( "fadein" ); // Afficher seulement image courante



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

    slideImg();



});
