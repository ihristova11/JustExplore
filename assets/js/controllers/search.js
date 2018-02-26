const search = function (database) {

 //   $(configuration.mainDiv).off();

    const searchDiv = "#search-field";

    $(configuration.mainDiv).on('input', searchDiv, function (e) {
        const value = $(e.target).val();
        const results = database.cities.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) == 0);

        if (!value || !results.length)
        {
            $('.suggestions').empty();
            return;
        }

        const cityController = city;

        $('.suggestions').html(`<ul class="suggestions-box">
        ${results.map( c => {
            return cityController.html(c);
        }).join("")} </li>`);
    });
}