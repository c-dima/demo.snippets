app.controller('HeaderController', ['$scope', function($scope) {

        $scope.navCollapsed = true;

        $scope.toggleNav = function() {
            $scope.navCollapsed = !$scope.navCollapsed;
        };

        // Collapsing the menu after navigation
        $scope.$on('$stateChangeSuccess', function() {
            $scope.navCollapsed = true;
        });

}]);