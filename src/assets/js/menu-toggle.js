(function($) {
  $.fn.panel = function(userConfig) {

    var $this = $(this),
      $body = $("body"),
      id = $this.attr("id"),
      config;

    // config.
    config = $.extend(
      {
        delay: 0,

        hideOnClick: false,

        hideOnEscape: true,

        hideOnSwipe: false,

        // reset on hide.
        resetScroll: false,

        resetForms: false,

        side: null,

        // target element for "class".
        target: $this,

        // class to toggle.
        visibleClass: "visible"
      },
      userConfig
    );

    // Expand "target" if it's not a jQuery object already.
    if (typeof config.target != "jQuery") {
      config.target = $(config.target);
    }

    // Panel.

    $this._hide = function(event) {

      // already hidden
      if (!config.target.hasClass(config.visibleClass)) {
        return;
      }

      // cancel event
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      config.target.removeClass(config.visibleClass);
      
      window.setTimeout(function() {

        if (config.resetScroll) {
          $this.scrollTop(0);
        }

        if (config.resetForms) {
          $this.find("form").each(function() {
			this.reset();
		});
		}
      }, config.delay);
    };

    // Body.

    // hide panel on body click
    $body.on("click touchend", function(event) {
      $this._hide(event);
    });

    // toggle.
    $body.on("click", "a[href=\"#" + id + "\"]", function(event) {
      event.preventDefault();
      event.stopPropagation();

      config.target.toggleClass(config.visibleClass);
    });

    // Window.
    return $this;
  };
})(jQuery);
