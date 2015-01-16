if (typeof webapp == "undefined" || !webapp) {
	var webapp = {};
}
;(function ($) {
	webapp.swipe = function (params) {
		this.settings = $.extend({
		    containerId: 'swipe-container',
		    navId: 'swipe-nav',
			prev: 'swipe-prev',
			next: 'swipe-next',
			startSlide: 0,
			speed: 400,
			auto: 3000,
			continuous: true,
			disableScroll: false,
			stopPropagation: true,
			callback: function (index, elem) { },
			transitionEnd: function (index, elem) { }
		}, params);

		this.container = document.getElementById(this.settings.containerId);
		return this.init();
	};

	webapp.swipe.prototype = {
		init: function () {
		    var self = this,
            	paramCallback = this.settings['callback'];
			var swiper = new Swipe(this.container, $.extend(this.settings, {
			    callback: function (index, elem) {
			        if (self.settings.navId) {
			            $('#' + self.settings.navId).find('li').removeClass('cur');
			            $($('#' + self.settings.navId).find('li').get(index)).addClass('cur');
			        }
			        paramCallback.apply(this, [index, elem]);
			    }
			}));

			$(this.settings.prev).on('click', function () {
				swiper.prev();
			});
			$(this.settings.next).on('click', function () {
				swiper.next();
			});

			if (this.settings.navId) {
			    $('#' + this.settings.navId).find('li').bind('click', function () {
			        swiper.slide($(this).index(), 400);
			    });
			}

			return swiper;
		}
	};
})(jQuery);