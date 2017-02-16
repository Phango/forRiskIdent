'use-strict';

angular.module('myApp.notifications.notifications-controller', [])

.controller('notificationsController', ['$scope', '$http', 'notificationsService', 'socket', function($scope, $http, notificationsService, socket) {
    // take notifications from service
    $scope.notifications = notificationsService.notifications;

    // dismiss a notification
    $scope.dismiss = function(notification) {
        notificationsService.dismiss(notification).then(function(data) {
            $scope.get();
        });
    }

    // toggle between show modes (full/minimized)
    $scope.toggleNotificationDetails = function() {
        $scope.showNotificationDetails = !$scope.showNotificationDetails;
    }

    // function to get all notifications
    $scope.get = function() {
        notificationsService.get().then(function(data) {
            // get Counts
            $scope.infoCount = $scope.getCount('info');
            $scope.warningCount = $scope.getCount('warning');
            $scope.errorCount = $scope.getCount('error');
        })
    }

    // get the number of notifications for given type
    $scope.getCount = function(type) {
        return $scope.notifications.filter(function(notification) {
            return notification.type == type
        }).length ;
    }

    // when backend socket emits 'notificationUpdated', this function will fire and get all notifications
    socket.on('notificationsUpdated', function() {
        $scope.get()
    });

    $scope.filterBy = function(type) {
        // reset filter if type is clicked and it is already filtered by clicked type
        if (type == $scope.filterType) {
            $scope.filterType = '';
        }
        else {
            $scope.filterType = type;
        }
    }

    // initialze controller definition
    $scope.init = function() {
        // init with notifications shown full
        $scope.showNotificationDetails = true;

        // init by getting all notifications
        $scope.get();
    }

    // initialze controller
    $scope.init();

}]);
