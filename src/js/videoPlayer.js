define(['jquery'], function ($) {

    var videoPlayer = {
        ele: null,
        ended: function () { }
    };

    videoPlayer.init = function (config) {
        var self = this;
        $.extend(self, config);


        self.ele.click(function () {
            self.videoEle = $(this).find('video');
            self.video = self.videoEle[0];
            
            $(this).siblings().find('video').each(function () {
                $(this)[0].pause();
            });

            self.videoEle.show();
            if (self.video.paused) {
                self.video.play();
            } else {
                self.video.pause();
            }


            self.video.addEventListener('ended', function () {

                self.videoEle.hide();
                self.ended();

            });
        });

        


        return this;
    };

    


    return videoPlayer;
});