import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  // Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  // Called when the user taps on the notification
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);
  },
  // Android only: GCM or FCM sender ID
  senderID: 'YOUR_SENDER_ID',
  // Android only: Icon resource name
  smallIcon: 'ic_notification',
});

// Request permission to receive push notifications
PushNotification.requestPermissions();
