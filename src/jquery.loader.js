/**
 * @author Robert Tomaszewski robert@tomaszewski.net.pl
 * @author Piotr Kowalski piecioshka@gmail.com
 */
loader = this.loader || {};

loader.item = 0;

loader.started = false;

loader.next = function () {
    loader.item++;
    if (loader.item >= config.images.length) {
        loader.item = 0;
    }
};

loader.Img = function (src) {
    return jQuery("<img>").attr({
        "src": src,
        "alt": "Obrazek"
    });
};

loader.init = function() {
    log("[f] loader.init()");
    
    loader.slideshow();
};

loader.slideshow = function () {
    log("[f] loader.slideshow({ element: " + loader.item + "})");
    
    var plh = jQuery("#" + config.placeholder),
        src = config.images[loader.item],
        pic = new loader.Img(src),
        inserted = plh.append(pic);
    
    plh.find("img").ready(function (element) {
        loader.started && plh.children().eq(0).remove();
        loader.started = true;
        
        setTimeout(function () {
            loader.slideshow();
        }, config.interval);
    });
    
    loader.next();
};

jQuery(document).ready(function () {
    loader.init();
});

log("file jquery.loader.js");
