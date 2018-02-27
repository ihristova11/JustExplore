const galleryItemThumb = (function() {
  const thumb = function(node) {
    return `
<div class="box-content">
<div class="embed-responsive embed-responsive-16by9">
<li class="gallery-item" id="${node.name}">
<img class="gallery-item-thumb" src="${node.imgSrc}" 
alt="${node.desc}">
<p class="gallery-item-name">${node.name}</p>
<img class="like" src="./images/likebutton.png" alt="Gimme some lovin">
</li>
</div>

</div>
        `;
  };

  return {
    thumb
  };
})();



// to be displayed
// {/* <div>
// <div class="blog-card">
// <div class="title-content">
//     <h3>
//         <a href="#">${node.name}</a>
//     </h3>
//     <div class="intro">
//         <a href="#">${node.parentName}</a>
//     </div>
// </div>
// <div class="card-info">
//     ${node.desc}
// </div>

// <div class="gradient-overlay"></div>
// <div class="color-overlay"></div>
// </div>
// </div> */}
