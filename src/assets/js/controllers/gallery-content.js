const galleryContent = (function(thumbnailCreator) {
    const getThumbnailsView = function(node) {
        return `
        <div class="node-info">
            <p class="node-name">${node.name}</p>
        </div>
        <ul class="thumbnails-gallery">
            ${node.childNodes.map(x => {
                return thumbnailCreator.createThumbnail(x);
            }) .join("")}
        </ul>
        `;
    };

    return {
        getThumbnailsView
    };
})(galleryThumbnail);
