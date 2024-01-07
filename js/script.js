$(document).ready(function(){
    //show/hide


    $('#hide').on('click', function(){
        $('#sh_h3').hide();
    });


    
    $('#show').on('click', function(){
        $('#sh_h3').show();
    });

    $('#togg').on('click', function(){
        $('#sh_h3').toggle(1033);
    });


//alert("hello world");


    $('#btn').on('click', function(){
        alert("welcome");
    
    });





//hide
    $('h3').on('click', function(){
        $(this).hide();
    });


//slide
      $("#flips").click( function(){
        $("#panel").slideDown("slow");


     });
//slide down

    $("button").click(function(){
      $("#p1").css("color", "broun").slideUp(2000).slideDown(2000);
    });
  //text change
    $("button").change(function(){
      alert("The text has been changed.");
    });
//selector
    $("#p1").on('click', function(){
        alert("p1");


    });

    $("#f1").click(function(){
        $("#p2").slideDown("slow");
      });









})