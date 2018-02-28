const search = (function(database) {
  $(configuration.mainDiv).off();

  const searchDiv = "#search-field";

  $(configuration.mainDiv).on("input", searchDiv, function(e) {

    function dfs(value, node, results) {
      if (!node.isHome) {
        if (node.name.toLowerCase().indexOf(value.toLowerCase()) === 0) {
          results.push(node);
        }
      }

      if (node.childNodes && node.childNodes.length) {
        for (var childNode of node.childNodes) {
          dfs(value, childNode, results);
        }
      }
    }

    const value = $(e.target).val();

    const results = [];

    dfs(value, databaseFunction(), results);

    if (!value || !results.length) {
      $(".suggestions").empty();
      return;
    }

    const sortedResults = results.slice(0);
    sortedResults.sort(function(a, b) {
      return b.likesCount - a.likesCount;
    });

    const cityController = listItemNode;
    const galleryController = displayNode;

    $(".suggestions").html(`<ul class="suggestions-box">
        ${sortedResults
          .map(c => {
            $(".suggestions").on("click", `#${c.name}`, function() {
              $("#search-field").val("");
              $(".suggestions").empty();
              $(".actions-actuator").append(galleryController.html(c));
            });
            return cityController.html(c);
          })
          .join("")} </ul>`);
  });
})(databaseFunction);
