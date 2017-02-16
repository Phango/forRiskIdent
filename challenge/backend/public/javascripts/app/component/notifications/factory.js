app.factory('notifications', ['$http', function($http) {
    var n = {
        notifications: []
    };


    // add a new notification
    n.add = function(notification) {
        var data = notification;
        return $http.post('/notifications', data).then(function(res) {
            return res.data;
        })
    }

    // get all notifications
    n.getAll = function(id) {
        return $http.get('/notifications').then(function(res) {
            return res.data;
        })
    }

    return n;

}]);
