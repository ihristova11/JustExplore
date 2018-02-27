const galleryItemThumb = (function () {
  const thumb = function (node) {
    return `
        <li class="gallery-item" id="${node.name}">
            <img class="gallery-item-thumb" src="${node.imgSrc}" alt="${
      node.desc
    }">
            <p class="gallery-item-name">${node.name}</p>
            <img class="like" src="./images/likebutton.png" alt="Gimme some lovin">
        </li>
        `;
  };

  return {
    thumb
  };
})();