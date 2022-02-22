
if(window.innerWidth < 640){
    $('#nav-items').hide();
    
    $('.menu').click(function(){
        $('.nav-menu').toggle();

    })

    
}else{
    $('.nav-menu').hide();
    $('.menu').hide();
}