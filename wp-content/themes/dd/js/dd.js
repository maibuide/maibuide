function spotlightSize () {
    $("#spotlight").css('height',  $(window).height()+'px');

    if ($(window).height()> $("#impressum-body").height()) {
        $("#impressum-body").css('height', $(window).height()-150 + 'px');
    }
}

$(window).load(function(){
    spotlightSize ();
});

$(window).resize(function(){
    spotlightSize ();
});



//$(window).load(function(){

 //   if ($(window).width()>930){
   //     $("#spotlight").css('height',  $(window).height()+'px');
    //}
        // if ($(window).width()<930){
        //     $("#spotlight").css('height',  '270px');
        //  } // else $("#spotlight").css('height',  $(window).height()+'px');
         // $("#about").css('padding-top',  (($(window).height()-840))+'px');
         // $("#about").css('padding-bottom',  (($(window).height()-840))+'px');
    
//    
//        $("#about-ruler").css('height',  (($(window).height()-100)/2)+'px');
//        $("#about").css('height',  (($(window).height()-100))+'px');
//        $("#about").css('padding-top',  (($(window).height()-100)/4)+'px');
//        $("#about").css('padding-bottom',  (($(window).height()-100)/4)+'px');
    
    
    
    
        //$("#about").css('margin-top', ((($(window).height())/6)+50)+'px');
        //$("#about").css('margin-bottom',((($(window).height())/6)+100)+'px');
        //$("#about").css('margin-bottom', (($(window).height())/4)+'px');
//        $("#about").css('margin-bottom'(($(window).height()-100)/3)+'px');
       // $("#about-ruler").css('height', ($(window).height())+'px');
        
//        $(".wrapper").css('height',  ($(window).height()-74)+'px');
//        $("footer").css('bottom', '-'+($(window).height()+51)+'px');
//});

$(window).ready(function(){    
    $( "#header" ).fadeIn( 2500, function() {
  });
    
    $( "#spotlight-title" ).fadeIn( 2500, function() {
  });
});
