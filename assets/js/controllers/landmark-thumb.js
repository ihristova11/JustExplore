const landmarkThumb = (function() {
    const thumb = function(landmark) {
        return `
        <li class="gallery-item" id="${landmark.name}">
            <img class="gallery-item-thumb" src="${landmark.imgSrc}" alt="${landmark.desc}">
            <p class="gallery-item-name">${landmark.name}</p>
            <img class="like" src="./assets/likebutton">
        </li>
        `;
    };

    return {
        thumb
    };
}());