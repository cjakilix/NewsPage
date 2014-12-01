var NewsModule = function(){

    function addNews(){
        
        var newsTitle = $('#new-title').val(),
            newsContent = $('#new-content').val();

            console.log(newsTitle + ' ' + newsContent + ' Ajouté aux articles');

            $('#news-container').prepend('<div class="news">'+
                '<h2 class="news-title">'+ newsTitle +'</h2>'+
                '<div class="news-content"><p>'+ newsContent + '</p></div>'+
                '<button class="button tiny modify-article">Modifier l\'article</button>'+
                '<button class="button tiny delete-article" >Supprimer l\'article</button></div>')

    };


    function modifyNews (){

        var parentDiv = $(this).parent();
        var parentContent = parentDiv.html();//variable de test
        var newsTitle = parentDiv.children('.news-title');

        parentDiv.children('.news-title').css( "color", "blue" );
        //var newsContent = $('parentDiv > .news-content').text();

        console.log(parentDiv);
        console.log(parentContent);
        console.log(newsTitle);
    };


    return {
        addNews: addNews,
        modifyNews : modifyNews

    }


};