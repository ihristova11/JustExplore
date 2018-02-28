const galleryCanvas = (function() {
    const emptyCanvas = `
    <div class="gallery">
        <button type="button" class="btn-up" aria-label="Left Align">
            <img src="images/icons-gallery/up.png">
        </button>
        <button type="button" class="btn-close" aria-label="Left Align">
            <img src="images/icons-gallery/close.png">
        </button>
        <div class="content-container"></div>
    </div>
    `;

    const getGalleryCanvas = (function() {
        return emptyCanvas;
    })();

    const clearGalleryCanvas = function() {
        if ($(".gallery")) {
            $(".gallery .content-container").empty();
        }
    };

    const closeGalleryCanvas = function() {
        if ($(".gallery")) {
            $(".actions-actuator").empty();
        }
    };

    return {
        getGalleryCanvas, 
        clearGalleryCanvas, 
        closeGalleryCanvas
    };
})();