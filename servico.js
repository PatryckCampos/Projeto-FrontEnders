$('.planos').hide();

/*

$(document).click (function(){
    if ($('.planos').is(':visible'))
        $('.planos').slideUp();
    });

*/

$('.button').click(function(){
    $('.planos').slideDown(1000);
    $('.button').css({ 'opacity' : 0 });
    $('.button').css({ 'cursor' : 'default' });
    location.replace("#window1")
    return false; 
})



$('.plano1').mouseenter(function(){
    $('.list-item-2').css({ 'background-color' : 'rgb(206, 206, 206)' });
    $('.list-item-2 strong').css({ 'font-size' : '120%' });
})

$('.plano1').mouseleave(function(){
    $('.list-item-2').css({ 'background-color' : 'rgb(221, 221, 221)' });
    $('.list-item-2 strong').css({ 'font-size' : '100%' });
})

$('.plano2').mouseenter(function(){
    $('.list-item-3').css({ 'background-color' : 'rgb(214, 208, 151)' });
    $('.list-item-3 strong').css({ 'font-size' : '120%' });
})

$('.plano2').mouseleave(function(){
    $('.list-item-3').css({ 'background-color' : 'rgb(240, 234, 180)' });
    $('.list-item-3 strong').css({ 'font-size' : '100%' });
})



