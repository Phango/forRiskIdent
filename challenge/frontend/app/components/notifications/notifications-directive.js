'use-strict';

angular.module('myApp.notifications.notifications-directive', [])

.directive('appNotifications', function() {
  return {
    templateUrl: '/components/notifications/notifications.html'
  };
});
