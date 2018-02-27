const displayNode = (function() {
  const html = function(node) {
    const childNodesThumbController = galleryItemThumb;

    //TODO: var sortedLandmarks = ;
    var result = `
            <div class="gallery display-node">
            <button type="button" class="btn-up" aria-label="Left Align">
            <img src="images/icons-gallery/up.png">
        </button>
        <button type="button" class="btn-close" aria-label="Left Align">
                <img src="images/icons-gallery/close.png">
            </button>
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
