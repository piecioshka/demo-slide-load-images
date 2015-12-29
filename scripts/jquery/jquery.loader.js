/**
 * @author Piotr Kowalski piecioshka@gmail.com
 */
var loader = (function () {

    var item = 0,
        started = false,

        next = function () {
            item++;
            if (item >= config.images.length) {
                item = 0;
            }
        },

        Img = function (src) {
            return jQuery("<img>").attr({
                "src": src,
                "alt": "Obrazek"
            });
        },

        slideShow = function () {
            var plh = jQuery("#" + config.placeholder),
                src = config.images[item],
                pic = new Img(src),
                inserted = plh.append(pic);

            plh.find("img").ready(function (element) {
                started && plh.children().eq(0).remove();
                started = true;

                setTimeout(function () {
                    slideShow();
                }, config.interval);
            });

            next();
        };

    return {
        init: function () {
            slideShow();
        }
    };

})();

jQuery(document).ready(function () {
    loader.init();
});
