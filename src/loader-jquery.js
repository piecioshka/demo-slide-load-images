/**
 * @author Robert Tomaszewski robert@tomaszewski.net.pl
 * @author Piotr Kowalski piecioshka@gmail.com
 */
loader = this.loader || {};
loader.jquery = loader.jquery || {};
loader.jquery.init = function() {
    log("loader.jquery.init()");
};

window.addEventListener("load", function(){
    // loader.jquery.init();
});
