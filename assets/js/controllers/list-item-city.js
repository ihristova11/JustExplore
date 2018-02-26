const listItemCity = (function(clean) {
    if (clean) {
        $(configuration.mainDiv).off();
    }

    const html = function(city) {
        var result = `
        <li id="${city.name}">${city.name}: ${city.likesCount}</li>
        `;
        return result;
    }

    return {
        html
    };
}());