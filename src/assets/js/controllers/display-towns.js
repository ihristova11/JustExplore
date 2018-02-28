const displayTownsCtrl = (function (database) {
    const node = databaseFunction();

    function displayTown() {
        const galleryController = displayNode;

        $("#towns").on("click", function () {
            $(".actions-actuator").off();
            $(".actions-actuator").empty();
            $(".actions-actuator").append(galleryController.html(node));
            $(".actions-actuator").on("click", ".btn-close", function () {
                $(".actions-actuator").off();
                $(".actions-actuator").empty();
            });
        });
    };

    return {
        displayTown
    };
})(databaseFunction);