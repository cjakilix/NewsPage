var AjaxModule = function(url,type,dataType){


	$.ajax({
            url : url,
            type : type,
            dataType: dataType,
            success : function(data, statut){

/*            	if ( data.hasOwnProperty() ) {
            		alert('found')
}else{
	alert('not found')
};*/		

                var url1 = data.image1,
                    url2 = data.image2,
                    url3 = data.image3;

                $("<li class=\"fadeout\" ><img src='" + url1 + "' /></li>").appendTo("#slider ul");
                $("<li class=\"fadeout\"><img src='" + url2 + "' /></li>").appendTo("#slider ul");
                $("<li class=\"fadeout\"><img src='" + url3 + "' /></li>").appendTo("#slider ul");
                console.log('Call Ajax success');

                BigSlider.updateValues();

            },
               
            error : function(resultat, statut, erreur){
                $('<span> > Une erreur s\'est produite</span>').appendTo(".add-image");
        console.log('Erreur Call Ajax');
            }


       }); //FIN Ajax call


};