$(document).foundation();

jQuery(function($){

/* SLIDER */
 
var sliderModule = new BigSlider();
var newsModule = new NewsModule();

var parentDiv;


sliderModule.sliderFade();
sliderModule.clickDots();
sliderModule.clickNext();
sliderModule.clickPrev();
sliderModule.autoStopSlider();

newsModule.addNews();


$('body').on('click','.add-image', function() {

        //FAIRE UN MODULE AJAX

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
                //funtest();

            },
               
            error : function(resultat, statut, erreur){
                $('<span> > Une erreur s\'est produite</span>').appendTo(".add-image");
        console.log('Erreur Call Ajax');
            }

        }); //FIN Ajax call

    });//FIN ADD IMAGES


/* NEWS */

    //Modifier des news
    $('body').on('click','.modify-article', function(){
        

        newsModule.getNewsValeurs(this);
        newsModule.modifyNews(this);

        return false;
    });

    //Valider la modif des news
    $('body').on('click','.save-modarticle', function(){


        newsModule.getNewsValues(this);
        newsModule.newsSave(this);

        return false;
    });

    //Annuler la modif des news
    $('body').on('click','.cancel-modarticle', function(){

        newsModule.newsNoModify(this);

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

