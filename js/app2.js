$(document).foundation();

jQuery(function($){

/* SLIDER */
 

    $('.dots').on('click',function(){

        var numDot = $(this).attr( "id" );
        var elem = numDot.split('dot');
        i= elem[1];
        i= i - 1 ;

        $sliderli.addClass("fadeout").removeClass("fadein");
        $currentItem = $sliderli.eq(i);
        $currentItem.addClass("fadein").removeClass("fadeout");

    });


    $('.next').on('click',function(){ 
        
            next();

    });   


    $('.prev').on('click',function(){
            prev();

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

            },// Fin success
               
            error : function(resultat, statut, erreur){
                $('<span> > Une erreur s\'est produite</span>').appendTo(".add-image");
                console.log('Erreur Call Ajax');

            }

        }); //FIN Ajax call

    });//FIN ADD IMAGES



/* NEWS */


$('body').on('click','#add-article', function(){
    
    addNews();

    return false;

});



});/////////////////////Fin chargement JQuery






function addNews(){
    
    var newsTitle = $('#new-title').val(),
        newsContent = $('#new-content').val();

        alert( newsTitle + ' ' + newsContent + 'test');
        console.log(newsTitle + ' ' + newsContent + 'consoletest');

        $('#news-container').prepend('<div class="news">'+
            '<h2 class="news-title">'+ newsTitle +'</h2>'+
            '<div class="news-content"><p>'+ newsContent + '</p></div>'+
            '<button class="button tiny modify-article">Modifier l\'article</button>'+
            '<button class="button tiny delete-article" >Supprimer l\'article</button></div>')

};


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