const galleryItemThumb = (function() {
  const thumb = function(node) {
      $(".gallery").on("click", `#${node.name}`, function() {

      });
    return `
    
<li class="gallery-item" id="${node.name}" style="background-image: url(${node.imgSrc});">
<div class="blog-card">
<div class="title-content">
    <h3>
    ${node.name}
    </h3>
    <div class="intro">
        <h4>${node.parentName}</h4>
    </div>
</div>
<div class="card-info">
    ${node.desc}
    <div class="btn-like">
<img src="images/icons-gallery/like-btn-p.png" alt="like button">
</div>
</div>

<div class="gradient-overlay">

</div>


</div>
        </li>     


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
