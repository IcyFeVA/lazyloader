/*
	by Pascal "Mason" Zirn | pascal.zirn@20minuten.ch
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

    var init = function(distance, replace, jqSelector) {
        injectDist = distance || 400;
        selector = jqSelector || 'data-lazyloadcontent';
        replaceORappend = replace || 'replace';

        $.each($('[' + selector + ']'), function() {
            proximityLoad($(this));
        });
    };

    return {
        init: init
    }

})(window.jQuery);


$(lazyloader.init(300, 'append', 'data-lazyloadcontent'));
