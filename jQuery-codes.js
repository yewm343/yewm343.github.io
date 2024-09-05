$(document).ready(function(){


   

    // $('.isButtonS').click(function(){
    //    $('p').hide();   //paragraph = target

    // });
    
    $('#demo1').on({
        // you can add more than one
       
        dblclick : function(){
            $('#demo1').css('background','#fac7a2');
        },
        mouseenter : function(){  //trigger action
            $('h4').css('background', 'salmon');
            $('h4').css('color', 'white');
            $('h4').css('fontSize','30px');
        },
        mouseleave : function(){
            $('h4').css('background','#fac7a2');
        }
        
    
    });

    $('#demo').click(function(){
        alert('An item added to your cart');
    
    });


    //SLIDE EFFECTS
    //SlideUp(), slideDown()
    $('.panel').hide();  //to hide the panel in our output the later show when we click .flip
    $('.flip').click(function(){
        $('.panel').slideToggle(2000); //slideUp(), and slideDown()
    });







    
});