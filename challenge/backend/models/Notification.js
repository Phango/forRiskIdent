var mongoose = require('mongoose');

var NotificationSchema = new mongoose.Schema({
    header: String,
    body: String,
    type: String,
    userId: String,
    dismissed: { type: Boolean, default: false }
});

mongoose.model('Notification', NotificationSchema);
