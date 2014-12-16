$(document).foundation();

jQuery(function($){

/* SLIDER */
 
BigSlider.initBigSlider();

NewsModule.initNewsModule();

$('body').on('click','.add-image', function() {

        //FAIRE UN MODULE AJAX




        $.ajax({
            url : 'http://demo0474378.mockable.io/testCecile',
            type : 'GET',
            dataType: 'JSON',
            success : function(data, statut){

                //var position = data.image1.search('jpg' || 'gif');
                //console.log(position + '');

                var url1 = data.image1,
                    url2 = data.image2,
                    url3 = data.image3;

                $("<li class=\"fadeout\" ><img src='" + url1 + "' /></li>").appendTo("#slider ul");
                $("<li class=\"fadeout\"><img src='" + url2 + "' /></li>").appendTo("#slider ul");
                $("<li class=\"fadeout\"><img src='" + url3 + "' /></li>").appendTo("#slider ul");
                console.log('Call Ajax success');

                BigSlider.updateValues();
                //modfun.funtest();

            },
               
            error : function(resultat, statut, erreur){
                $('<span> > Une erreur s\'est produite</span>').appendTo(".add-image");
        console.log('Erreur Call Ajax');
            }

        }); //FIN Ajax call

    });//FIN ADD IMAGES


});/////////////////////Fin chargement JQuery

