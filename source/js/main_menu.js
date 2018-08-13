$(document).ready(function() {
    function e(t) {
        $(".side-nav").children().removeClass("is-active"),
            $(".side-nav").children().eq(t).addClass("is-active")
    }
        $(".side-nav li").click(function() {
            if (!$(this).hasClass("is-active")) {
                var t = $(this)
                    , n = t.parent().find(".is-active")
                    , s = t.parent().children().index(n)
                    , r = t.parent().children().index(t)
                    , o = $(this).parent().children().length - 1;
                e(r)
            }
        }),
        $(".cta").click(function() {
            var t = $(".side-nav").find(".is-active")
                , n = $(".side-nav").children().index(t)
                , s = $(".side-nav").children().length - 1
                , r = s;
            e(s),
                i(n, r, s)
        });
});