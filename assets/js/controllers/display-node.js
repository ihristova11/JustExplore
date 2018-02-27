const displayNode = (function() {
  const html = function(node) {
    const childNodesThumbController = galleryItemThumb;

    //TODO: var sortedLandmarks = ;
    var result = `
            <div class="gallery display-node">
                <div class="node-info">
                    <p class="node-name">${node.name}</p>
                </div>
                <ul class="thumbnails-gallery">
                    ${node.childNodes
                      .map(x => {
                        return childNodesThumbController.thumb(x);
                      })
                      .join("")}
                </ul>
            </div>
        `;
    return result;
  };
  return {
    html
  };
})();
