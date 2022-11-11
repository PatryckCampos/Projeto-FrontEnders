// foto 1
$('.window1').hide();

$(document).click(function(){
    if ($('.window1').is(':visible'))
        $('.window1').slideUp();
    });

$('.abrir-modal1').click(function(){
        $('.window1').slideDown();
        location.replace("#window1")
        return false; 
});




// foto 2
$('.window2').hide();
$(document).click(function(){
    if ($('.window2').is(':visible'))
        $('.window2').slideUp();
        
});
$('.abrir-modal2').click(function(){
    $('.window2').slideDown();
    location.replace("#window2")
    return false; 
})


// foto 3
$('.window3').hide();
$(document).click(function(){
    if ($('.window3').is(':visible'))
        $('.window3').slideUp();
});
$('.abrir-modal3').click(function(){
    $('.window3').slideDown();
    location.replace("#window3")
    return false; 
})

// foto 4
$('.window4').hide();
$(document).click(function(){
    if ($('.window4').is(':visible'))
        $('.window4').slideUp();
        
});
$('.abrir-modal4').click(function(){
    $('.window4').slideDown();
    location.replace("#window4")
    return false; 
})
