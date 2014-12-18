var AjaxModule = (function(){

    console.log('Ajaxmodule ok');

    function send (url, type,dataType, success){
        $.ajax({
            url : url,
            type : type,
            dataType: dataType,
            success : function(data, statut){
               success (data, statut);
            },

            error : function(resultat, statut, erreur){
                $('<span> > Une erreur s\'est produite</span>').appendTo(".add-image");
        console.log('Erreur Call Ajax');
            }
        });
    };

    return {
        send : send 
    }

}());




