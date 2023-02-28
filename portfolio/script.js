$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            // addClass will add the element
           $('.navbar').addClass("sticky")
        }
        else{
            // removeClass will remove the element
            $('.navbar').removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
 
        
    })
    $('.menu-btn').click(function(){
        // toggleClass will toggle the element/menu/navbar
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active");
    })


});


