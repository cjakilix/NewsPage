$(document).foundation();

jQuery(function($){

/* SLIDER */
 
var sliderModule = new BigSlider();
var newsModule = new NewsModule();
sliderModule.sliderFade();

var parentDiv;


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
                sliderModule.ajaxSuccess(data, statut);
            },
               
            error : function(resultat, statut, erreur){
                sliderModule.ajaxError(resultat, statut, erreur);
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
        
        newsModule.getNewsValeurs.call(this);
        newsModule.modifyNews.call(this);

        return false;
    });

    //Valider la modif des news
    $('body').on('click','.save-modarticle', function(){

        newsModule.getNewsValues.call(this);
        newsModule.newsSave.call(this);

        return false;
    });

    //Annuler la modif des news
    $('body').on('click','.cancel-modarticle', function(){

        newsModule.newsNoModify.call(this);

        return false;
    });

    //Supprimer une news
    $('body').on('click','.delete-article', function(){
        
        //newsModule.getNewsValeurs.call(this);
        parentDiv = $(this).closest('article.news');
        //console.log(parentDiv);


    });


    // Fermer la modale sans supprimer l'article

    $('body').on('click','.close-mymodal', function(){

        $('#myModal').foundation('reveal', 'close');

        return false;
    });


        // Fermer la modale en supprimant l'article

    $('body').on('click','.yesdelete-article', function(){

        parentDiv.remove();
        $('#myModal').foundation('reveal', 'close');
        
        
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