require(
    [
        "angular",
        "app",
        "./routing.js",
		"./controllers/home.js"
    ],
    function(angular)
    {
        require(["domready!"], function(document)
                {
                    return angular.bootstrap(document, ["fooding"]);
                });
    });