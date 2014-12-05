// Module BigSlider

var BigSlider = function(){


    var sliderli;
    var currentItem;
    var nbrli;
    var nbrliIndex;
    var i;
    var InteralvId;

    updateValues();


    sliderli.addClass('fadeout').removeClass('fadein');
    currentItem.addClass('fadein').removeClass('fadeout');


    function updateValues(){
        sliderli = $('#slider li');
        nbrli = sliderli.length;
        nbrliIndex = nbrli -1;
        i=0;
        currentItem = $('#slider li').eq(i);

        
        $('.dots').remove();
        $.each(sliderli, function() {
            $('<span id="dot'+(i+1)+'"class="dots haha"></span>').appendTo('.nav');
            i++;

            //console.log('updatesValues / Each Dots auto');
        });

    };


    function sliderFade() {
      InteralvId = setInterval(next, 3000);
      //console.log('start sliderFade');
    };


    function stopSliderFade() {
     clearInterval(InteralvId);
     //console.log('stop sliderFade');
    };


    function autoStopSlider () {

        $('#slider').hover(stopSliderFade, sliderFade);
    
    };


    function clickNext (){

        $('body').on('click','.next', function(){ 
        
            next();
        });
    };


    function next(){
        i++;
        sliderli.addClass('fadeout').removeClass('fadein'); 

        if( i > nbrliIndex ){
            i = 0;
        }

        currentItem = sliderli.eq(i); 
        currentItem.addClass('fadein').removeClass('fadeout'); 
    };



    function clickPrev (){

        $('body').on('click','.prev', function(){ 
        
            i--; 
            sliderli.addClass('fadeout').removeClass('fadein');

            if( i < 0 ){
                i = nbrliIndex;
            }

            currentItem = sliderli.eq(i);
            currentItem.addClass('fadein').removeClass('fadeout');
        });
    };


    function clickDots(){

        $('body').on('click','.dots', function(){

            i = $(this).index();

            //console.log(i);

             sliderli.addClass('fadeout').removeClass('fadein');
             currentItem = sliderli.eq(i);
             currentItem.addClass('fadein').removeClass('fadeout');
        });
    };

    

    return {
        updateValues : updateValues,
        sliderFade : sliderFade,
        stopSliderFade : stopSliderFade,
        autoStopSlider : autoStopSlider,
        clickNext : clickNext,
        next: next,
        clickPrev : clickPrev,
        clickDots : clickDots

    }


};