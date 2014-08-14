
angular.module('MainCtrl', []).controller('MainController',
    ['$scope', 'users', function($scope, users) {

    $scope.userList = users.getUserList();

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

    $('#btnAddUser').on('click', function(event) {
        event.preventDefault();

        // Super basic validation - increase errorCount variable if any fields are blank
        var errorCount = 0;
        $('#addUser input').each(function(index, val) {
            if($(this).val() === '') { errorCount++; }
        });

        // Check and make sure errorCount's still at zero
        if(errorCount === 0) {

            // If it is, compile all user info into one object
            var newUser = {
                'username': $('#addUser fieldset input#inputUserName').val(),
                'email': $('#addUser fieldset input#inputUserEmail').val(),
                'fullname': $('#addUser fieldset input#inputUserFullname').val(),
                'age': $('#addUser fieldset input#inputUserAge').val(),
                'location': $('#addUser fieldset input#inputUserLocation').val(),
                'gender': $('#addUser fieldset input#inputUserGender').val()
            }

            // Use AJAX to post the object to our adduser service
            users.addUser(newUser, function(response) {

                // Check for successful (blank) response
                if (response.msg === '') {

                    // Clear the form inputs
                    $('#addUser fieldset input').val('');

                    // Update the table
                    $scope.userList = users.getUserList();
                }
                else {

                    // If something goes wrong, alert the error message that our service returned
                    alert('Error: ' + response.msg);

                }
            });
        }
        else {
            // If errorCount is more than 0, error out
            alert('Please fill in all fields');
            return false;
        }
    });

    // Delete User link click
    $('#userList table tbody').on('click', 'td a.linkdeleteuser', function(event) {
        event.preventDefault();

        // Pop up a confirmation dialog
        var confirmation = confirm('Are you sure you want to delete this user?');

        // Check and make sure the user confirmed
        if (confirmation === true) {

            // If they did, do our delete
            users.deleteUser({id: $(this).attr('rel')}, function(response) {

                // Check for a successful (blank) response
                if (response.msg === '') {
                }
                else {
                    alert('Error: ' + response.msg);
                }

                // Update the table
                $scope.userList = users.getUserList();
            });

        }
        else {

            // If they said no to the confirm, do nothing
            return false;

        }

    });
}]);
