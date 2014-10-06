var app = angular.module('demoApp', [
    'ui.router',
    'ui.bootstrap',
    'firebase'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    //States
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "app/views/home.view.html"
        })
        .state('about', {
            url: "/about",
            templateUrl: "app/views/about.view.html"
        })

}]);
