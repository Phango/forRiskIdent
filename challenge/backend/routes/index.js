var mongoose = require('mongoose');
var Notification = mongoose.model('Notification');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.io.emit("home", 'home data');
    res.render('index', { title: 'Express' });
});

router.post('/notifications', function(req, res, next) {
    var notification = new Notification(req.body);

    notification.save(function(err, newNotification) {
      if (err) { return next(err); }
      
      res.io.sockets.emit("notificationsUpdated", 'data');
      res.json(newNotification);
    });
})

router.get('/notifications', function(req, res, next) {
    Notification.find({
        dismissed: false
    }, function(err, notifications) {
      if (err) { return next(err); }

      res.json(notifications);
    });
});

router.put('/notifications/dismiss/:id', function(req, res, next) {
    Notification.findById(req.body.id, function(err, notification) {
        if (err) { return next(err); }

        notification.dismissed = true;

        notification.save(function(err, updatedNotification) {
            if (err) { return next(err); }

            res.io.emit("notificationsUpdated");
            res.json(updatedNotification);
        })
    })
})

module.exports = router;
