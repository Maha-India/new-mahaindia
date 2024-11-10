$(document).ready(function(){
    if(window.innerWidth>800){$("#toggle").remove();}else{
        $("nav").hide();
        $("#page").hide();
        $("#toggle").click(function(){
            
            $("body").toggle();
            $("nav").toggle();
            $("nav").toggleClass('navigate navigate-on');
            $(".navigate-on").css({"background-color":"black","display":"block","align":"center","width":"100vw","left":"0","margin":"0 0 0 0","top":"60px","z-index":"1","position":"absolute"});
            $("#page").toggle();
            $("#page").toggleClass('page page-on');
            $(".page-on").css({"background-color":"black","display":"block","align":"center","width":"100vw","left":"0","padding":"0 0 0 0","z-index":"1","position":"absolute"});
            $("main").toggle ();
            $("footer").toggle();
            $("#header-image-menu").toggle();
            $("#toggle").show();
          });

    }
});