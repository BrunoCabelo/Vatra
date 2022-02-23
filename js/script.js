$(function(){
    var i = true;
    $('#menu').click(function(){
        $('#nav-menu').toggle(()=>{
            $('#nav-menu').css('left', 0);
        });

        
        if(i === true){
            document.getElementById('menu').style.WebkitTransitionDuration='1s';
            document.getElementById('menu').style.WebkitTransform = 'rotate(180deg)';
            i = false;
        }else{
            document.getElementById('menu').style.WebkitTransitionDuration='1s';
            document.getElementById('menu').style.WebkitTransform = 'rotate(0deg)';
            i = true
        }
            
        
        
    })

    $(".scroll1").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
    
            const hash = this.hash;
    
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top - 100
                },
                800
            );
        }

        $('#nav-menu').toggle(()=>{
            $('#nav-menu').css('left', 0);
        });
    });

    $(".scroll2").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
    
            const hash = this.hash;
    
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top - 100
                },
                800
            );
        }
    });

    
});
