'use-strict';

angular.module('myApp.notifications.notifications-service', [])

.service('notificationsService', ['$http', function($http) {

    var service = {
        notifications: [],

        // gets all notifications and copies to this object
        get: function() {
            return $http.get('http://localhost:8001/notifications').success(function(data) {
                angular.copy(data, service.notifications);
            });
        },

        // dismiss given notification
        dismiss: function(notification) {
            var id = notification._id;
            var dissmissUrl = 'http://localhost:8001/notifications/dismiss/' + id;
            return $http.put(dissmissUrl, {
                id: id
            }).success(function(data) {

            });
        }

    }

    return service;

}]);
