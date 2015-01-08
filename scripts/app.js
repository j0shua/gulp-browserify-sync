(function(){
    var hideElement = require('./hideElement');
    console.log('party');


    console.log('dont blink');
    console.log('gonna hide that h1 in 1');

    setTimeout(function(){
        hideElement('h1');
    }, 1000);

    var angular = require('angular');
    require('angular-route');

    var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                controller: 'MainController',
                //controllerAs: 'ctrl',
                templateUrl: 'test.partial.html',
            })
            .otherwise({
                redirectTo: '/'
            });

    });

    app.controller('MainController', function($scope){
        console.log('lets see if ^^ is annotated to pass in $scope');

        $scope.message = 'scope message';
/*
        var vm = this;
        vm.message = 'hi josh';
*/
    });

})();
