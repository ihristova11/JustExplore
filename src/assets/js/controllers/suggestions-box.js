const suggestionsBox = (function() {
  const getSuggestions = function(suggestions) {
    return `
            <ul class="suggestions-box>
                ${suggestions.map(s => getIndividualSuggestion(s)).join("")}
            </ul>
        `;
  };

  const getIndividualSuggestion = function(suggestion) {
    return `
            <li id="${suggestion.name}">${suggestion.name}: ${
      suggestion.likesCount
    }</li>
        `;
  };

  return {
    getSuggestions
  };
})();
