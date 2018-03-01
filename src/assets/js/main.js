(function($) {
  $(function() {
    var $window = $(window),
      $body = $("body");
    var database = databaseFunction;

    // disable animations/transitions until the page has loaded.
    $body.addClass("is-loading");

    $window.on("load", function() {
      window.setTimeout(function() {
        $body.removeClass("is-loading");
      }, 100);
    });

    // menu.
  });
})(jQuery);
