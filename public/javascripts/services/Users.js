
angular.module('UsersService', ['UsersService']).factory('users', ['$http', function($http) {
    return {
        getUserList: function(callback) {
            $http.get('/users/userlist').then(function(result) {
                callback(result.data);
            });
        },
        addUser: function(data, callback) {
            $http.post('/users/adduser', data).then(function(result) {
                callback(result.data);
            })
        },
        deleteUser: function(data, callback) {
            $http.delete('/users/deleteuser/' + data).then(function(result) {
                callback(result.data);
            })
        }
    }
}]);
