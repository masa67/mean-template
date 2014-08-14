
angular.module('UsersService', ['UsersService']).factory('users',
    ['$http', '$resource', function($http, $resource) {

    // var UserList = $resource('/users/userlist');
    return {
        getUserList: function(callback) {
            // UserList.get(function(data) {
            //     callback(data);
            // )});
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
