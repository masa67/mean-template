
angular.module('UsersService', ['UsersService']).factory('users',
    ['$resource', function($resource) {

    return $resource('/users/userlist', {}, {
        getUserList: {method: 'GET', url: '/users/userlist', isArray: true},
        addUser: {method: 'POST', url: '/users/adduser'},
        deleteUser: {method: 'DELETE', url: '/users/deleteuser/:id'}
        });
}]);
