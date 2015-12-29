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
            var img = document.createElement("img");
            img.src = src;
            img.alt = "Obrazek";
            return img;
        },

        slideShow = function () {
            var plh = pklib.dom.byId(config.placeholder),
                src = config.images[item],
                pic = new Img(src),
                inserted = pklib.dom.insert(pic, plh);

            pklib.event.add(inserted, "load", function (element) {
                started && plh.removeChild(plh.firstChild);
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

pklib.event.add(window, "load", loader.init);
