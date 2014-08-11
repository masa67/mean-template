
angular.module('MainCtrl', []).controller('MainController',
    ['$scope', 'users', function($scope, users) {

    users.getUserList(function(data) {
        $scope.userList = data;
    });

    $scope.userDetail = {};
    $('#userList table tbody').on('click', 'td a.linkshowuser', function(event) {
            // Prevent Link from Firing
            event.preventDefault();

            // Retrieve username from link rel attribute
            var thisUserName = $(this).attr('rel');

            // Get Index of object based on id value
            var arrayPosition = $scope.userList.map(function(arrayItem) { return arrayItem.username; })
                .indexOf(thisUserName);

            // Get our User Object
            $scope.userDetail = $scope.userList[arrayPosition];
            $scope.$apply();
        });
}]);

