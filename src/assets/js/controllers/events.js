const events = (function (
  suggestionsBoxCreator,
  galleryCanvasCreator,
  galleryContentCreator,
  searcher
) {
  const bindSearchBoxInput = (function () {
    $(configuration.mainDiv).on("input", "#search-field", function () {
      var value = $("#search-field").val();
      if (!value) {
        return;
      }

      var suggestions = searcher.findBeginningWith(value);
      if (!suggestions.length) {
        return;
      }

      suggestions = suggestions.sort(function (a, b) {
        return b.likesCount - a.likesCount;
      });

      $(".suggestions").html(suggestionsBoxCreator.getSuggestions(suggestions));
      suggestions.map(s => {
        $(".suggestions").on("click", `#${s.name}`, function () {
          $("#search-field").val("");
          $(".suggestions").empty();
          galleryView(s);
        });
      });
    });
  })();

  const bindMenuTowns = (function () {
    $("#towns").on("click", function () {
      galleryView(searcher.getTopNode);
    });
  })();

  const bindCloseButton = function () {
    if (!$(".gallery").length) {
      return;
    }
    $(".gallery").on("click", ".btn-close", function() {
    closeGalleryCanvas();
    });
  };

  const galleryView = function (node) {
    if (!$(".gallery").length) {
      $(".actions-actuator").append(galleryCanvasCreator.getGalleryCanvas);
      bindCloseButton();
    }

    clearGalleryCanvas();

    $(".gallery .content-container").append(
      galleryContentCreator.getThumbnailsView(node)
    );
    node.childNodes.map(
      c =>
      function () {
        $(".gallery .content-container").on(
          "click",
          `#${c.name}`,
          galleryView(c)
        );
      }
    );
  };

  const clearGalleryCanvas = function () {
    if ($(".gallery").length) {
      $(".gallery .content-container").empty();
    }
  };

  const closeGalleryCanvas = function () {
    if ($(".gallery").length) {
      $(".actions-actuator").empty();
    }
  };

  const bindMenu = (function () {
    var $body = "body";
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
  })();

})(suggestionsBox, galleryCanvas, galleryContent, searcher);
