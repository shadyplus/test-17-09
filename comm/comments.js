$(function(){


    
    
    var div = $( ".comments-s .self-comment .right-p .txrin" ); // тут указываем ID элемента
    var offername = $('.comments-s .offername').text(' Revitaprost ')
    

    $(document).mouseup( function(e){ // событие клика по веб-документу
		// var div = $( ".comments-s .self-comment .right-p .txrin" ); // тут указываем ID элемента
        div.addClass('active')

		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
                div.removeClass('active'); // скрываем его
		}
	});


    var oldLinks = $('.pure-u-1.pure-u-xl-8-12');


    function set_message(text) {
        var $item = $('<div class="message">' + text + '</div>');
        $item.appendTo($('.bot-text')).delay(3000);
    }

    



    var block_show = false;

    var countForBl = $('.comments-s .com-body .body .for.typing').length;

    var min = 1;
    var max = 5;


    
    // and the formula is:
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    var random2 = Math.floor(Math.random() * (12 - 8 + 1)) + 9;
    var random3 = Math.floor(Math.random() * (19 - 12 + 1)) + 10;

 
    function scrollTracking(){
        if (block_show) {
            return false;
        }
    
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.comments-s .com-body .body').offset().top;
        var eh = $('.comments-s .com-body .body').outerHeight();
        var dh = $(document).height();   
    
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            block_show = true;
            
            
            $('.comments-s .com-body .body').show('fast', function(){

                    function go() {                   
                        var arr = countForBl;
                        var i = 0;
                        var timer = setInterval(function() {
                          if (i >= arr) {
                            clearInterval(timer);
                           
                          } else {
                            $('.comments-s .com-body .body .for.hidd').addClass('typing');
                            var totalElements = $('.comments-s .com-body .body .for.typing').length;
                            setTimeout(function(){
                                $('.comments-s .com-body .body .for.hidd').eq(totalElements - i - 1).removeClass('hidd')

                            }, 1000)

                            

                            setTimeout(function() {
                                $('.comments-s .com-body .body .for.typing').eq(totalElements - i - 1).removeClass('typing');
                            }, random2 * 1000);
                          }
                        }, random3 + '000');
                      }
                      
                      go();



                
                

                  
                
            });

        }
    }
    
    $(window).scroll(function(){
        scrollTracking();
    });
        
    $(document).ready(function(){ 
        scrollTracking();
    });

    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

    $('.comments-s a').on('click', function(e){
        e.preventDefault();
    })




    $('.is-size-medium').on('click', function(){
        $('.com-pop').fadeIn();
        $('.close').on('click', function() {
            $('.com-pop').hide();
         });
        
        setTimeout(function() {
            $('.comments-s .self-comment .right-p .txrin textarea').val('')
         }, 1000);
    })



})