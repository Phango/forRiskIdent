app.controller('MainCtrl', ['$scope', '$state', 'notifications', function($scope, $state, notifications) {

    // add new notification
    $scope.add = function(notification) {
        notifications.add(notification).then(function(res) {
            if (res._id) {
                $scope.resetForm();
            }
        });
    }

    // define the notification types
    $scope.notificationTypes = [
        {
            name: 'Info',
            value: 'info'
        },
        {
            name: 'Warning',
            value: 'warning'
        },
        {
            name: 'Error',
            value: 'error'
        }
    ];

    // reset the form to blank
    $scope.resetForm = function() {
        $scope.notification = {};
        $scope.notification.type = $scope.notificationTypes[0].value;
    }

    // init (sets up form with default first type)
    $scope.resetForm();

}]);
