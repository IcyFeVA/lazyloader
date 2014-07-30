/*
	by Pascal "Mason" Zirn | www.sonicboom.ch
	https://github.com/n3utrinoCH
*/

window.lazyloader = (function($) {

    var $w = $(window),
        selector, injectDist, replaceORappend;

    var proximityLoad = function($el) {
        var elY = $el.offset().top,
            content = $el.attr(selector);

        var proximityCheck = function() {
            $el.dYb = Math.abs(elY - (window.pageYOffset + window.innerHeight));
            $el.dYt = Math.abs(elY - window.pageYOffset);

            if ($el.dYb < injectDist || $el.dYt < injectDist) {
                $w.unbind('scroll.lazyproxyload', proximityCheck);
                replaceORappend === 'append' ? $el.append(content) : $el.html(content);
            }
        };

        $w.bind('scroll.lazyproxyload', proximityCheck);

        proximityCheck();
    };

    var init = function(dist, reporap, sel) {
        injectDist = dist || 400;
        selector = sel || 'data-lazyloadcontent';
        replaceORappend = reporap || 'replace';

        $.each($('[' + sel + ']'), function() {
            proximityLoad($(this));
        });
    };

    return {
        init: init
    }

})(window.jQuery);
