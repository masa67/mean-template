
angular.module('UsersService', ['UsersService']).factory('users', ['$http', function($http) {
    var userList = [];
    return {
        getUserList: function(callback) {
            if (userList.length == 0) {
                $http.get('/users/userlist').then(function(result) {
                    userList = result.data;
                    callback(userList);
                });
            } else {
                callback(userList);
            }
        }
    }
}]);
