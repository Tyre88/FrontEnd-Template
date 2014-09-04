define(
    [
        "angular",
        "ui-router",
        "ui-bootstrap"
    ],
    function(angular)
    {
        return angular.module('alendar', ['ng', 'ui.router', 'ui.bootstrap'])
        .controller('home', ["$scope", function($scope) 
        {
            
        }]);
    });