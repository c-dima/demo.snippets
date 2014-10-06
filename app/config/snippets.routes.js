app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('snippets', {
            url: "/snippets",
            abstract: true,
            templateUrl: "app/views/snippets.view.html",
            controller: 'SnippetsController'
        })
        .state('snippets.list', {
            url: "",
            templateUrl: "app/views/snippets.list.view.html"
        })
        .state('snippets.create', {
            url: "/create",
            templateUrl: "app/views/snippets.form.view.html"
        })
        .state('snippets.detail', {
            url: "/detail/:snippetId",
            templateUrl: "app/views/snippets.detail.view.html"
        })
        .state('snippets.edit', {
            url: "/edit/:snippetId",
            templateUrl: "app/views/snippets.form.view.html"
        });
}]);
