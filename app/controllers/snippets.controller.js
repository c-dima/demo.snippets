app.controller('SnippetsController', ['$scope', '$state', '$firebase',
    function($scope, $state, $firebase) {

    console.log('SnippetsController');

    var ref = new Firebase("https://vivid-heat-1162.firebaseio.com/");
    var sync = $firebase(ref);

    $scope.snippets = sync.$asArray();
    $scope.snippet = {};

    var add = function() {
        $scope.snippets.$add($scope.snippet).then(function(newChildRef) {
            $state.go('snippets.list');
        }, function(error) {
            console.log(error);
        });
    };

    var update = function() {
        var record = $scope.snippets.$getRecord($state.params.snippetId);
        ['name', 'author', 'description', 'code'].forEach(function(key) {
            record[key] = $scope.snippet[key];
        });

        $scope.snippets.$save(record).then(function(newChildRef) {
            $state.go('snippets.list');
        }, function(error) {
            console.log(error);
        });
    };


    $scope.submit = function() {
        if ($scope.isEdit) {
            update();
        } else {
            add();
        }
    };

    $scope.delete = function(id) {
        var snippet =  $scope.snippets.$getRecord(id);
        $scope.snippets.$remove(snippet).then(function() {
            $state.go('snippets.list');
        }, function(error) {
            console.log(error);
        });
    };

    $scope.$on('$stateChangeSuccess', function() {
        if ($state.params.snippetId) {
            $scope.snippets.$loaded().then(function() {
                angular.copy(
                    $scope.snippets.$getRecord($state.params.snippetId),
                    $scope.snippet
                );
            }, function(error) {
                console.log(error);
            });
        }

        var stateName = $state.current.name;
        if (stateName == 'snippets.create') {
            $scope.snippet = {};
            $scope.isEdit = false;
        } else if (stateName == 'snippets.edit') {
            $scope.isEdit = true;
        }
    });

}]);