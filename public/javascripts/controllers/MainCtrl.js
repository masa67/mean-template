
angular.module('MainCtrl', []).controller('MainController',
    ['$scope', 'users', function($scope, users) {

    users.getUserList(function(data) {
        $scope.userList = data;
    });
}]);
