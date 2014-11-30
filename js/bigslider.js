// Module BigSlider

var BigSlider = function(){


    // les fonctions qui s'appellent seules sont parenthésées
    // Fonction non parenthésées, soit font des return, soit doivent être appelées ailleurs

	var $slider = $('#slider'),
	    $sliderli = $('#slider li'),
	    $nbrli = $sliderli.length,
	    nbrliIndex = $nbrli -1,
	    i=0,
	    $currentItem = $('#slider li').eq(i); // le i étant réinit à 0 ci-dessus, la première image est à index 0


	    $.each($sliderli, function() {
	        $("<span id='dot" + (i+1) + "' class='dots'></span>").appendTo(".nav");
	        i++;
	    });


	    $sliderli.addClass('fadeout').removeClass('fadein');
	    $currentItem.addClass('fadein').removeClass('fadeout');



    var next = function(){
        i++; // incrémente le compteur
        $sliderli.addClass("fadeout").removeClass("fadein"); // on cache les images

        if( i > nbrliIndex ){
            i = 0;
        }

        $currentItem = $sliderli.eq(i); // on définit la nouvelle image
        $currentItem.addClass("fadein").removeClass("fadeout"); // puis on l'affiche
    };

    function prev(){
        i--; // Décrémente le compteur
        $sliderli.addClass("fadeout").removeClass("fadein");

        if( i < 0 ){

            i = nbrliIndex;
        }

        $currentItem = $sliderli.eq(i);
        $currentItem.addClass("fadein").removeClass("fadeout");
        
    };
   
    function sliderFade(){
        setTimeout(function(){

        next();
        sliderFade();

        }, 3000);
    };

sliderFade();

}();