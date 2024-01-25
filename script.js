$(document).ready(function(){
    $('.event-wrapper').hide();

    $(".moreless-btn").click(function(){
        $('header').animate({"height":"4vh"}, 1000);
        $('footer').animate({"height":"60vh"}, 1000);

        $('.moreless-btn').hide();
        $('.lessmore-btn').show();

        $('.description-wrapper').fadeOut();
        $('.event-wrapper').fadeIn(1000);
    });

    $(".lessmore-btn").click(function(){
        $('header').animate({"height":"60vh"}, 1000);
        $('footer').animate({"height":"4vh"}, 1000);

        $('.lessmore-btn').hide();
        $('.moreless-btn').show();

        $('.description-wrapper').fadeIn(1000);
        $('.event-wrapper').fadeOut(1000);
    });

    $("#v").mouseover(function(){
        $("#vf, #v-bio").show();
        $(this).text("× Vera Petukhova");
    });
   
    $("#v").mouseleave(function(){
         $("#vf, #v-bio").hide();
         $(this).text("+ Vera Petukhova");
    });

    $("#j").mouseover(function(){
        $("#jf, #j-bio").show();
        $(this).text("× John Threat");
    });
   
    $("#j").mouseleave(function(){
         $("#jf, #j-bio").hide();
         $(this).text("+ John Threat");
    });

    $("#m").mouseover(function(){
        $("#mf, #m-bio").show();
        $(this).text("× Maisa Imamović");
    });
   
    $("#m").mouseleave(function(){
         $("#mf, #m-bio").hide();
         $(this).text("+ Maisa Imamović");
    });
});