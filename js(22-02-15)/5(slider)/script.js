$(document).ready(function () {
    $('.arrow-next').on('click', function () {
        var $cur = $('.current');
        var $next = $cur.next();

        if (!($next.length)) {
            $next = $('.cont:first-child');
        }

        $cur.fadeOut(600);
        $cur.removeClass('current');

        $next.fadeIn(600);
        $next.addClass('current');

        var $curDot = $('.active-dot');
        var $nextDot = $curDot.next();

        if (!($nextDot.length)) {
            $nextDot = $('.dot:first-child');
        }

        $curDot.removeClass('active-dot');
        $nextDot.addClass('active-dot');
    });
    $('.arrow-prev').on('click', function () {
        var $cur = $('.current');
        var $prev = $cur.prev();

        if (!($prev.length)) {
            $prev = $('.cont:last-child');
        }

        $cur.fadeOut(600);
        $cur.removeClass('current');

        $prev.fadeIn(600);
        $prev.addClass('current');

        var $curDot = $('.active-dot');
        var $prevDot = $curDot.prev();

        if (!($prevDot.length)) {
            $prevDot = $('.dot:last-child');
        }

        $curDot.removeClass('active-dot');
        $prevDot.addClass('active-dot');
    });
});