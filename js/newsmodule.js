var NewsModule = function(){
    // Sortir toutes les variables et les nommer différement

        var parentDiv;
        var newsTitleValue;
        var newsContentValue;

        var newsTitleNoChange;
        var NewsContentNoChange;


    function addNews(){
        
        var newsTitle = $('.add-news .new-title').val(),
            newsContent = $('.add-news .new-content').val();

            //console.log(newsTitle + ' ' + newsContent + ' Ajouté aux articles');

            $('section.add-news p.redalert').remove();


            newsTitle ? true : false;
            newsContent ? true : false;

            if(newsTitle && newsContent){
                
                $('#news-container').prepend('<article class="news">'+
                    '<h2 class="news-title">'+ newsTitle +'</h2>'+
                    '<div class="news-content"><p>'+ newsContent + '</p></div>'+
                    '<button class="button tiny modify-article">Modifier l\'article</button>'+
                    '<button class="button tiny delete-article" data-reveal-id="myModal">Supprimer l\'article</button></article>');
            }else {
                $('#add-article').before('<p class="redalert">Vous devez remplir le titre et le contenu de l\'article.</p>')

            };
    };





    function getNewsValeurs (){

            parentDiv = $(this).parents('article.news');

        var modButton = $(this),
            suppButton = parentDiv.children('button.delete-article'),
            newsTitleContainer = parentDiv.children('.news-title'),//Selectionne tout le h2 et pas le texte
            newsContentContainer = parentDiv.children('.news-content');
            newsTitle = newsTitleContainer.text(),
            newsContent = newsContentContainer.text();

    };




    function modifyNews (){


        
        parentDiv.addClass('modify-news');
        parentDiv.children().remove();

        $( '<form>'+
              '<div class="row">'+
                '<div class="large-4 columns">'+
                  '<label>Titre de l\'article'+
                    '<input type="text" class="new-title" value="'+ newsTitle +'"/>'+ //PROBLEME RECUP (newsTitle) après modif
                  '</label>'+
                '</div>'+
              '</div>'+
              '<div class="row">'+
                '<div class="large-8 columns">'+
                  '<label>Votre article'+
                    '<textarea type="text" class="new-content" style="white-space:normal;">'+ newsContent + '</textarea>'+ 
                  '</label>'+
                '</div>'+
              '</div>'+
              '<button class="button tiny save-modarticle" >Enregistrer</button>'+
              '<button class="button tiny cancel-modarticle" >Annuler</button>'+
            '</form>').appendTo(parentDiv);
        

        //newsTitle.appendTo(parentDiv);

        //console.log(newsTitle);
        //console.log(newsContent);

    };


    function newsNoModify (){
        parentDiv = $(this).parents('article.news');
        parentDiv.removeClass('modify-news');
        parentDiv.children().remove();

        //A factoriser avec le addnews (faire une fonction ?)
        $('<h2 class="news-title">'+ newsTitle +'</h2>'+
            '<div class="news-content"><p>'+ newsContent + '</p></div>'+
            '<button class="button tiny modify-article">Modifier l\'article</button>'+
            '<button class="button tiny delete-article" data-reveal-id="myModal">Supprimer l\'article</button>')
        .appendTo(parentDiv);
    };        


    function getNewsValues (){
        parentDiv = $(this).parents('article.news');
        newsTitleValue = parentDiv.find('.new-title').val();
        newsContentValue = parentDiv.find('.new-content').val();
       
    };


    function newsSave (){
        newsTitleValue ? true : false;
        newsContentValue ? true : false;
        
        if(newsTitleValue && newsContentValue){
            parentDiv.removeClass('modify-news');
            parentDiv.children().remove();

            //A factoriser avec le addnews (faire une variable ?)
             $('<h2 class="news-title">'+ newsTitleValue +'</h2>'+
            '<div class="news-content"><p>'+ newsContentValue + '</p></div>'+
            '<button class="button tiny modify-article">Modifier l\'article</button>'+
            '<button class="button tiny delete-article" data-reveal-id="myModal" >Supprimer l\'article</button>')
            .appendTo(parentDiv);
        }else{
            $(this).before('<p class="redalert">Vous devez remplir le titre et le contenu de l\'article.</p>')
            
        }
    };



    return {
        addNews: addNews,
        modifyNews : modifyNews,
        getNewsValeurs : getNewsValeurs,
        getNewsValues : getNewsValues,
        newsNoModify : newsNoModify,
        newsSave : newsSave

    }


};