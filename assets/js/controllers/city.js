const city = (function(clean) {
    if (clean) {
        $(configuration.mainDiv).off();
    }

    const html = function(city) {
        return `
        <li>${city.name}: ${city.likesCount}</li>
        `;
    }

    return {
        html
    };
}());