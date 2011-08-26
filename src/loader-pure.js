/**
 * @author Robert Tomaszewski robert@tomaszewski.net.pl
 * @author Piotr Kowalski piecioshka@gmail.com
 */
loader = this.loader || {};
loader.pure = loader.pure || {};
loader.pure.init = function() {
    log("loader.pure.init()");
    
    loader.contener = document.getElementById("contener");
    var img = loader.contener.getElementsByTagName("img")[0];
    img.src = loader.images[loader.config.iterator];
    
    loader.pure.slideshow.call(null);
    
    setInterval(function(){
        var im = loader.pure.getActiveImg();
        im.style.display = "none";
        loader.pure.slideshow();
    }, loader.config.interval);
};

loader.pure.getActiveImg = function(){
    var images = loader.contener.getElementsByTagName("img");
    if(loader.config.iterator-1 >= 0){
        return images[loader.config.iterator-1];
    } else {
        return images[loader.images.length - 1];
    }
};

loader.pure.slideshow = function(){

    if(loader.config.iterator !== loader.images.length - 1){
        loader.config.iterator++;

        var img = document.createElement("img");
        img.src = loader.images[loader.config.iterator];
        img.alt = img.src;
        img.style.display = "none";
        
        loader.contener.appendChild(img);
    } else {
        loader.config.iterator = 0;
    }
    

    loader.contener.getElementsByTagName("img")[loader.config.iterator].style.display = "block";
    
};

window.addEventListener("load", function(){
    loader.pure.init();
});
