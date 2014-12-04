$(document).foundation();

jQuery(function($){

/* SLIDER */
 
var sliderModule = new BigSlider();
var newsModule = new NewsModule();
sliderModule.sliderFade();

var parentDiv;


    $('body').on('click','.dots', function(){

        sliderModule.navDot(this);

    });


    $('body').on('click','.next', function(){ 
        
            sliderModule.next();
    });   


    $('body').on('click','.prev', function(){
            sliderModule.prev();

    });



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
            },
               
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
        

        newsModule.getNewsValeurs.call(this);
        newsModule.modifyNews.call(this);

        return false;
    });

    //Valider la modif des news
    $('body').on('click','.save-modarticle', function(){


        newsModule.getNewsValues(this);
        newsModule.newsSave.call(this);

        return false;
    });

    //Annuler la modif des news
    $('body').on('click','.cancel-modarticle', function(){

        newsModule.newsNoModify(this);
        //newsModule.newsNoModify();

        return false;
    });

    //Supprimer une news
    $('body').on('click','.delete-article', function(){
        
        //newsModule.getNewsValeurs.call(this);
        parentDiv = $(this).parents('article.news');
        //console.log(parentDiv);


    });


    // Fermer la modale

    $('body').on('click','.close-mymodal', function(){

        $('#myModal').foundation('reveal', 'close');

    });


    // Fermer la modale en supprimant l'article

    $('body').on('click','.yesdelete-article', function(){

        parentDiv.remove();
               
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