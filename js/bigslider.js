var BigSlider = (function(){


    var sliderli;
    var currentItem;
    var nbrli;
    var nbrliIndex;
    var i;
    var InteralvId;
    var currentDot;

    updateValues();


    sliderli.addClass('fadeout').removeClass('fadein');
    currentItem.addClass('fadein').removeClass('fadeout');


    function updateValues(){
        sliderli = $('#slider li');
        nbrli = sliderli.length;
        nbrliIndex = nbrli -1;
        i=0;
        currentItem = sliderli.eq(i);

        
        $('.dots').remove();
        $.each(sliderli, function() {
            var d=0;
            $('<span id="dot'+(d+1)+'"class="dots haha"></span>').appendTo('.nav');
            d++;

            console.log('updatesValues / Each Dots auto OK');
        });

        currentDot = $('body').find('.dots').eq(i);
        currentDot.addClass( 'dotsactive' );



    };


    function sliderFade() {
      InteralvId = setInterval(next, 3000);
    };


    function stopSliderFade() {
     clearInterval(InteralvId);
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

        if( i > nbrliIndex ){
            i = 0;
        }

        hideShow();

    };



    function clickPrev (){

        $('body').on('click','.prev', function(){ 
        
            i--; 


            if( i < 0 ){
                i = nbrliIndex;
            }

            hideShow();
        });
    };


    function clickDots(){

        $('body').on('click','.dots', function(){

            i = $(this).index();

            hideShow();
        });
    };


    function hideShow(){

        sliderli.addClass('fadeout').removeClass('fadein');
        $('.dots').removeClass('dotsactive');

        currentItem = sliderli.eq(i);

        currentItem.addClass('fadein').removeClass('fadeout');

        currentDot = $('body').find('.dots').eq(i);
        currentDot.addClass('dotsactive');
    };

    function initBigSlider(){
        sliderFade();
        clickDots();
        clickNext();
        clickPrev();
        autoStopSlider();
    };

    return {
        updateValues : updateValues,//besoin call ajax
        initBigSlider : initBigSlider

    }


}());
