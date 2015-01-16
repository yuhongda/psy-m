if (typeof Util == "undefined") {
    Util = {}
}

(function ($) {
    Util.Mask = function (config) {
        var config = config || {};
        this.config = {
            bgColor: "#000",
            zIndex: 9000
        }
        $.extend(this.config, config);
    }

    Util.Mask.prototype = {
        show: function () {
            var self = this, cfg = this.config;
            self.mask = $('<div class="mask"></div>');
            self.mask.css({
                position: "absolute",
                zIndex: cfg.zIndex,
                top: "0px",
                left: "0px",
                background:cfg.bgColor,
                width: $(window).width() + 20 + 'px',
                height: $(document).height()
            });


            self.resizeHandler = function (event) {
                event.data.obj._resize();
            }


            self.mask.appendTo("body");
            requestAnimationFrame(function () {
                self.mask.addClass('mask-show');
            });

            $('body').css({ 'overflow': 'hidden' });

            $(window).bind("resize", { obj: self }, self.resizeHandler);
        },
        close: function () {
            this.mask.remove();
            $(window).unbind("resize", this.resizeHandler);
            $('body').css({ 'overflow': 'auto' });
        },
        _resize: function () {
            this.mask.css({
                width: $(window).width() + 20 + 'px',
                height: $(document).height()
            });
        }
    }
})(jQuery);