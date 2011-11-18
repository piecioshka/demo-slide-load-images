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
        
        slideshow = function () {
            var plh = dom.byId(config.placeholder),
                src = config.images[item],
                pic = new Img(src),
                inserted = dom.insert(pic, plh);
            
            dom.onready(inserted, function (element) {
                started && dom.del(plh);
                started = true;
                
                setTimeout(function () {
                    slideshow();
                }, config.interval);
            });
            
            next();
        };
        
    return {
        init: function() {
            slideshow();
        }
    };
    
})();

dom.addEvent(window, "load", loader.init);
