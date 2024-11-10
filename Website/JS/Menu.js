$(document).ready(function() {
    if (window.innerWidth > 800) {
        $("#toggle").remove();
    } else {
        $("nav").hide();
        $("#page").hide();

        $("#toggle").click(function() {
            $("body").toggle();
            $("nav").toggle().toggleClass('navigate navigate-on');
            $("#page").toggle().toggleClass('page page-on');
            $("main").toggle();
            $("footer").toggle();
            $("#header-image-menu").toggle();

            // Apply inline styles for .navigate-on
            if ($("nav").hasClass('navigate-on')) {
                $("nav").css({
                    "background-color": "black",
                    "display": "block",
                    "text-align": "center",  // Updated from 'align' to 'text-align'
                    "width": "100vw",
                    "left": "0",
                    "margin": "0",
                    "top": "60px",
                    "z-index": "1",
                    "position": "absolute"
                });
            }

            // Apply inline styles for .page-on
            if ($("#page").hasClass('page-on')) {
                $("#page").css({
                    "background-color": "black",
                    "display": "block",
                    "text-align": "center",  // Updated from 'align' to 'text-align'
                    "width": "100vw",
                    "left": "0",
                    "padding": "0",
                    "z-index": "1",
                    "position": "absolute"
                });
            }
        });
    }
});
            
