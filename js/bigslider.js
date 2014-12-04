// Module BigSlider

var BigSlider = function(){


    var sliderli;
    var currentItem;
    var nbrli;
    var nbrliIndex;
    var i;
        

    function updateValues(){
        sliderli = $('#slider li');
        nbrli = sliderli.length;
        nbrliIndex = nbrli -1;
        i=0;
        currentItem = $('#slider li').eq(i);


        
        $( ".dots" ).remove();
        $.each(sliderli, function() {
            $("<span id='dot" + (i+1) + "' class='dots'></span>").appendTo(".nav");
            i++;
        });
    };

    updateValues();


	sliderli.addClass('fadeout').removeClass('fadein');
	currentItem.addClass('fadein').removeClass('fadeout');



    function next(){
        i++; // incrémente le compteur
        sliderli.addClass("fadeout").removeClass("fadein"); // on cache les images

        if( i > nbrliIndex ){
            i = 0;
        }

        currentItem = sliderli.eq(i); // on définit la nouvelle image
        currentItem.addClass("fadein").removeClass("fadeout"); // puis on l'affiche
    };

    function prev(){
        i--; // Décrémente le compteur
        sliderli.addClass("fadeout").removeClass("fadein");

        if( i < 0 ){
            i = nbrliIndex;
        }

        currentItem = sliderli.eq(i);
        currentItem.addClass("fadein").removeClass("fadeout");
        
    };


    function navDot(){
    // A faire pour automatisation des dots
    };

   
    function sliderFade(){
        setTimeout(function(){

        next();
        sliderFade();

        }, 3000);
    };


    function ajaxSuccess (data, statut){
                var url1 = data.image1,
                    url2 = data.image2,
                    url3 = data.image3;

                $("<li class=\"fadeout\" ><img src='" + url1 + "' /></li>").appendTo("#slider ul");
                $("<li class=\"fadeout\"><img src='" + url2 + "' /></li>").appendTo("#slider ul");
                $("<li class=\"fadeout\"><img src='" + url3 + "' /></li>").appendTo("#slider ul");
                console.log('Call Ajax success');

                updateValues();
    };


    function ajaxError (resultat, statut, erreur){
        $('<span> > Une erreur s\'est produite</span>').appendTo(".add-image");
        console.log('Erreur Call Ajax');
    };   


    return {
        next: next,
        prev : prev,
        navDot : navDot,
        sliderFade : sliderFade,
        nbrli : nbrli,
        sliderli : sliderli,
        currentItem : currentItem,
        updateValues : updateValues,
        ajaxSuccess : ajaxSuccess,
        ajaxError : ajaxError
    }


};