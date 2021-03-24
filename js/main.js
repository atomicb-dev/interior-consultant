$(document).ready(function () {

    $("#btn_menu_mob").click(function (e) { 
        e.preventDefault();
        $("#menu_mob").addClass("js_display");
        $("body").addClass("js_scroll");
    });

    $("#btn_close_menu").click(function (e) { 
        e.preventDefault();
        $("#menu_mob").removeClass("js_display");
        $("body").removeClass("js_scroll");
    });
});