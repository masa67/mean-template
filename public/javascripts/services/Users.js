
angular.module('UsersService', ['UsersService']).factory('users', ['$http', function($http) {
    return {
        getUserList: function(callback) {
            $http.get('/users/userlist').then(function(result) {
                callback(result.data);
            });
        }
    }
}]);
