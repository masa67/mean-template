
angular.module('UsersService', ['UsersService']).factory('users',
    ['$resource', function($resource) {

    return $resource('/users/userlist', {}, {
        getUserList: {method: 'GET', params: {}, url: '/users/userlist', isArray: true}
        });

    /*
    return {
        getUserList: function(callback) {
            UserList.getUserList(null, function(result) {
                callback(result.data);
            });
            // $http.get('/users/userlist').then(function(result) {
            //     callback(result.data);
            // });
        },
        addUser: function(data, callback) {
            $http.post('/users/adduser', data).then(function(result) {
                callback(result.data);
            });
        },
        deleteUser: function(data, callback) {
            $http.delete('/users/deleteuser/' + data).then(function(result) {
                callback(result.data);
            });
        }
    }*/
}]);
