const displayCity = (function () {
    const html = function (city) {
        const landmarkThumbController = landmarkThumb;

        var result = `
            <div class="gallery display-city">
                <div class="city-info">
                    <p class="city-name">${city.name}</p>
                </div>
                <ul class="landmarks-gallery">
                    ${city.landmarks.map(x => {
                        return landmarkThumbController.thumb(x);
                    }).join("")}
                </ul>
            </div>
        `;
        return result;
    }
    return {
        html
    };
}());