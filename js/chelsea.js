$(function(){
    $(".main > li, .s_bg").mouseover(function(){
        $(".s_bg, .sub").stop().slideDown();
    })

    $(".main > li").mouseout(function(){
        $(".s_bg, .sub").stop().slideUp();
    })

    

})