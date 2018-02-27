const listItemNode = (function(clean) {
  if (clean) {
    $(configuration.mainDiv).off();
  }

  const html = function(node) {
    var result = `
        <li id="${node.name}">${node.name}: ${node.likesCount}</li>
        `;
    return result;
  };

  return {
    html
  };
})();
