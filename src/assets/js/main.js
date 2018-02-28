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

    displayTownsCtrl.displayTown();

    // menu.
    $("#menu")
      .append("<a href=\"#menu\"></a>")
      .appendTo($body)
      .panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: "right",
        target: $body,
        visibleClass: "is-menu-visible"
      });
  });
})(jQuery);
