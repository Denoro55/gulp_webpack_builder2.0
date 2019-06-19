var initPopup = function() {

    var down = false;

    $('.js-call-popup').on('click',function(e){
        e.preventDefault();
        $('html').css('overflow','hidden');
        var $target = $(this).attr('data-target');
        var $popup = $('#'+$target);
        var $block = $popup.find('.popup');
        $popup.fadeIn(500);
        $block.addClass('popup-anim');
    });

    $('.js-popup-close').on('click',function(){
        $('html').css('overflow','');
        var $popup = $(this).closest('.popup-wrapper');
        $popup.fadeOut(500);
        $(this).closest('.popup').removeClass('popup-anim');
    });

    $(document).mousedown(function (e){
       var div = $(".popup");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            
        } else {
            down = true;
        }
    });

    $(document).mouseup(function (e){
        var div = $(".popup");
        if (!div.is(e.target) && div.has(e.target).length === 0 && !down) {
            $('html').css('overflow','');
            $(div).removeClass('popup-anim');
            var $popup = $('.popup-wrapper');
            $popup.fadeOut(500);
        }
        down = false;
    });

};

export default initPopup;