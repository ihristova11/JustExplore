const events = (function (configuration,
    suggestionsBoxCreator,
    galleryCanvasCreator,
    galleryContentCreator,
    searcher) {
    const bindSearchBoxInput = (function () {
        $(configuration.mainDiv).on("input", "#search-field", function () {
            var value = $("#search-field").value;
            if (!value) {
                return;
            }

            var suggestions = searcher.findBeginningWith(value);
            if (!suggestions.length) {
                return;
            }

            suggestions.sort(function (a, b) {
                return b.likesCount - a.likesCount;
            });

            suggestions = suggestionsBoxCreator.getSuggestions(suggestions);
            suggestions.map(s => {
                $(".suggestions").on("click", `#${s.name}`, function () {
                    $("search-field").val("");
                    $(".suggestions").empty();
                    galleryView(s);
                });
            });
        });
    })();

    const bindMenuTowns = (function() {
        $("#towns").on("click", function() {
            galleryView(searcher.getTopNode);
        });
    })();

    const bindCloseButton = function() {

    }

    const galleryView = function (node) {
        if (!$(".gallery")) {
            $(".actions-actuator").append(galleryCanvasCreator.getGalleryCanvas());
            $(".gallery").on("click", ".btn-close", galleryCanvasCreator.closeGelleryCanvas);
        }
        galleryCanvasCreator.clearGalleryCanvas();
        $(".gallery .content-container").append(galleryContentCreator.getThumbnailsView(node));
        node.childNodes.map(c => function () {
            $(".gallery .content-container").on("click", `#${c.name}`, galleryView(c));
        });
    };
})();