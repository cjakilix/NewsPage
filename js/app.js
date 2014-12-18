$(document).foundation();

jQuery(function($){

 
    BigSlider.initBigSlider();

    NewsModule.initNewsModule();

    $('body').on('click','.add-image', function() {

        AjaxModule.send('http://demo0474378.mockable.io/testCecile', 'GET', 'JSON', injectData);

        function injectData (data, statut) {

            for (var iter = 0; data.length > iter; iter++){
                console.log(data);

            }

            var url1 = data.image1,
                url2 = data.image2,
                url3 = data.image3;

                $("<li class=\"fadeout\" ><img src='" + url1 + "' /></li>").appendTo("#slider ul");
                $("<li class=\"fadeout\"><img src='" + url2 + "' /></li>").appendTo("#slider ul");
                $("<li class=\"fadeout\"><img src='" + url3 + "' /></li>").appendTo("#slider ul");
                console.log('Call Ajax success');

                BigSlider.updateValues();

        };

    });//FIN ADD IMAGES


});//Fin chargement JQuery

