var NewsModule = function(){
    // Sortir toutes les variables et les nommer différement

        var parentDiv;
        var newsTitleValue;
        var newsContentValue;



    function addNews(){

        $('body').on('click','#add-article', function(){


            
            var newsTitle = $('.add-news .new-title').val(),
                newsContent = $('.add-news .new-content').val();


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

            return false;
        });  

    };





    function getNewsValeurs (that){

            parentDiv = $(that).parents('article.news');

        var modButton = $(this),
            suppButton = parentDiv.children('button.delete-article'),
            newsTitleContainer = parentDiv.children('.news-title'),//Selectionne tout le h2 et pas le texte
            newsContentContainer = parentDiv.children('.news-content');
            newsTitle = newsTitleContainer.text(),
            newsContent = newsContentContainer.text();

    };




    function modifyNews (thut){

        var parentDiv = $(thut).parents('article.news');
        
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
    };


    function newsNoModify (that){
        parentDiv = $(that).parents('article.news');
        parentDiv.removeClass('modify-news');
        parentDiv.children().remove();

        //A factoriser avec le addnews (faire une fonction ?)
        $('<h2 class="news-title">'+ newsTitle +'</h2>'+
            '<div class="news-content"><p>'+ newsContent + '</p></div>'+
            '<button class="button tiny modify-article">Modifier l\'article</button>'+
            '<button class="button tiny delete-article" data-reveal-id="myModal">Supprimer l\'article</button>')
        .appendTo(parentDiv);
    };        


    function getNewsValues (thut){
        parentDiv = $(thut).parents('article.news');
        newsTitleValue = parentDiv.find('.new-title').val();
        newsContentValue = parentDiv.find('.new-content').val();
       
    };


    function newsSave (thot){

        parentDiv = $(thot).parents('article.news');

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
            $(thot).before('<p class="redalert">Vous devez remplir le titre et le contenu de l\'article.</p>')
            
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