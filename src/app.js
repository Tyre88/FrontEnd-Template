define(
    [
        "angular",
        "ui-router",
        "ui-bootstrap"
    ],
    function(angular)
    {
        return angular.module('fooding', ['ng', 'ui.router', 'ui.bootstrap'])
        .controller('home', ["$scope", "$state", function($scope, $state)
        {
            $scope.Title = "Hello world";

			//$state.go("home");
        }])
		.config([
			"$compileProvider",
			"$httpProvider",
			function($compileProvider, $httpProvider)
			{
				$compileProvider.debugInfoEnabled(false);
				$httpProvider.useApplyAsync(true);
			}
		]);
    });