/**
 * robert@tomaszewski.net.pl
 */
jQuery(document).ready(function() {
    var imgPathPrefix = 'media/img/';
    var containerClass = 'mainContainer';
    var intervalTimeout = 10000;
    var intervalId
    var currentIdx;

    var imgArr = [
        {name: 'img_1_camp.jpg', loaded: false, showRequest: false, error: false},
        {name: 'img_2_camp.jpg', loaded: false, showRequest: false, error: false},
        {name: 'img_x_camp.jpg', loaded: false, showRequest: false, error: false},
        {name: 'img_4_camp.jpg', loaded: false, showRequest: false, error: false}
    ];
    var imgArrLength = imgArr.length;

    var initImgName = jQuery('.' + containerClass + ' img').attr('src').replace(/^.+\//, '');

    var getImg = function(idx) {
        if (imgArr[idx].loaded == true) {
            return;
        }
        jQuery('<img />').one('error', function() {
            imgArr[idx].error = true;
            getImg((idx + 1) % imgArrLength);
        }).attr('src', imgPathPrefix + imgArr[idx].name).one('load', function() {
            imgArr[idx].loaded = true;
            if (imgArr[idx].showRequest == true) {
                imgArr[idx].showRequest = false;
                runAtOnceSwitchImg();
            }
            getImg((idx + 1) % imgArrLength);
            return;
        });
        return;
    };

    var switchImg = function(idx) {

        var switchImgAnim = function(idx) {
            $('.' + containerClass + ' img').fadeOut(200, function(){
               $('.' + containerClass + ' img').attr({
                   src: imgPathPrefix + imgArr[idx].name
               }).bind('load', function(){
                   if (this.complete) {
                       $(this).fadeIn(400);
                   }
                   $(this).unbind('load');
               });
           });
        }

        var getAlterIdx = function() {
            var alterIdx = null;
            var i = (currentIdx + 1) % imgArrLength;

            while (i != currentIdx) {
                if (imgArr[i].loaded == true) {
                    alterIdx = i;
                    break;
                }
                i = (i + 1) % imgArrLength;
            }

            return alterIdx;
        };
        var alterIdx;

        if (imgArr[idx].loaded == false) {
            alterIdx = getAlterIdx();
            if (alterIdx === null) {
                if (imgArr[idx].error == false) {
                    clearInterval(intervalId);
                    imgArr[idx].showRequest = true;
                }
                return;
            } else {
                idx = alterIdx;
            }
        }

        switchImgAnim(idx);
        // jQuery('.' + containerClass + ' img').attr('src', imgPathPrefix + imgArr[idx].name);
        currentIdx = idx;
        nextIdx = (currentIdx + 1) % imgArrLength;
    };

    var runDelaySwitchImg = function() {
        intervalId = setInterval(function() {
            switchImg(nextIdx);
        }, intervalTimeout);
    };

    var runAtOnceSwitchImg  = function() {
        switchImg(nextIdx);
        intervalId = setInterval(function() {
            switchImg(nextIdx);
        }, intervalTimeout);
    };
    var nextIdx = 0;

    for (var i=0;i<imgArrLength;i+=1) {
        if (imgArr[i].name == initImgName) {
            imgArr[i].loaded = true;
            currentIdx = i;
            nextIdx = i + 1;
            getImg(nextIdx % imgArrLength);
            break;
        }
    }
    runDelaySwitchImg();
});