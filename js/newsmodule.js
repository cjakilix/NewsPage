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

                if($('#news-container').length){
                   console.log('yes news container');
                    
                }else{
                    $('.feed').append('<section class="wrap" id="news-container"></section>');
                    console.log('no news container');

                };
                    
                $('#news-container').prepend('<article class="news">'+
                    '<h2 class="news-title">'+ newsTitle +'</h2>'+
                    '<div class="news-content"><p>'+ newsContent + '</p></div>'+
                    '<button class="button tiny modify-article">Modifier l\'article</button>'+
                    '<button class="button tiny delete-article" data-reveal-id="myModal">Supprimer l\'article</button></article>');

                    $('.add-news .new-title').val('');
                    $('.add-news .new-content').val('');
            }else {
                $('#add-article').before('<p class="redalert">Vous devez remplir le titre et le contenu de l\'article.</p>')

            };

            return false;
        });  

    };





    function getNewsValeurs (that){

            parentDiv = $(that).parents('article.news');

        /*var modButton = $(this),
            suppButton = parentDiv.children('button.delete-article'),*/
            var newsTitleContainer = parentDiv.children('.news-title'),//Selectionne tout le h2 et pas le texte
            newsContentContainer = parentDiv.children('.news-content');
            newsTitle = newsTitleContainer.text(),
            newsContent = newsContentContainer.text();

            console.log(newsTitle);
            console.log(parentDiv);

    };




    function modifyNews (thut){

        parentDiv = $(thut).parents('article.news');
        
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

    function clickModifyNews (){
        $('body').on('click','.modify-article', function(){
            console.log('modifynews');
        

            getNewsValeurs(this);
            modifyNews(this);

            return false;
        });

    };





    //Ajouter la structure de l'article une fois modifié. A FACTORISER AVEC AJOUT DE NEWS ?
    function appendNewsStructure (title, content){
        $('<h2 class="news-title">'+ title +'</h2>'+
            '<div class="news-content"><p>'+ content + '</p></div>'+
            '<button class="button tiny modify-article">Modifier l\'article</button>'+
            '<button class="button tiny delete-article" data-reveal-id="myModal" >Supprimer l\'article</button>')
        .appendTo(parentDiv);
        console.log('Structure');
    };



    function newsNoModify (){

        $('body').on('click','.cancel-modarticle', function(){
            console.log('Function Nomodify');

            parentDiv = $(this).parents('article.news');
            parentDiv.removeClass('modify-news');
            parentDiv.children().remove();

            appendNewsStructure(newsTitle,newsContent);

            return false;
        });    
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

            appendNewsStructure(newsTitleValue,newsContentValue);

        }else{
            $(thot).before('<p class="redalert">Vous devez remplir le titre et le contenu de l\'article.</p>')
            
        }
    };

    //Valider la modif des news
    function validNewsSave (){
        $('body').on('click','.save-modarticle', function(){
            console.log('validNewssave');

            getNewsValues(this);
            newsSave(this);

            return false;

        });

    };

    

    //Supprimer une news
    function deleteArticle (){
        $('body').on('click','.delete-article', function(){
            console.log(this);
        
        //newsModule.getNewsValeurs.call(this);
        parentDiv = $(this).parents('article.news');
        console.log("delete article");


        });
    };

    // Fermer la modale en supprimant l'article
    function yesDeleteArticle (){
        $('body').on('click','.yesdelete-article', function(){
        console.log('marche parent div yesdelete');

        parentDiv.remove();

        if( !$.trim( $('#news-container').html() ).length ) {
            $('#news-container').remove();
            console.log('notext');
        }else{
            console.log('not empty !');
        }
        
               
        });

    };



    function closeModal (){
        $('body').on('click','.close-mymodal', function(){

        $('#myModal').foundation('reveal', 'close');

        });

    };


    function initNewsModule (){
        addNews();
        validNewsSave();
        deleteArticle();
        yesDeleteArticle();
        closeModal();
        newsNoModify();
        clickModifyNews();
    };

    return {

        initNewsModule : initNewsModule

    }


}();