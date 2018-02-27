const search = (function (database) {
  $(configuration.mainDiv).off();

  const searchDiv = "#search-field";

  $(configuration.mainDiv).on("input", searchDiv, function (e) {

    function Dfs(value, node, results) {
      if (!node.isHome) {
        if (node.name.toLowerCase().indexOf(value.toLowerCase()) == 0) {
          results.push(node);
        }
      }

      if (node.childNodes && node.childNodes.length) {
        for (var childNode of node.childNodes) {
          Dfs(value, childNode, results);
        }
      }
    }

    const value = $(e.target).val();

    const results = [];

    // const results = database.cities.filter(
    //   c => c.name.toLowerCase().indexOf(value.toLowerCase()) == 0
    // );
    Dfs(value, database.data, results);

    if (!value || !results.length) {
      $(".suggestions").empty();
      return;
    }

    const cityController = listItemNode;
    const galleryController = displayNode;

    $(".suggestions").html(`<ul class="suggestions-box">
        ${results
          .map(c => {
            $(".suggestions").on("click", `#${c.name}`, function() {
              $(".actions-actuator").append(galleryController.html(c));
            });
            return cityController.html(c);
          })
          .join("")} </ul>`);
  });
})(databaseFunction);