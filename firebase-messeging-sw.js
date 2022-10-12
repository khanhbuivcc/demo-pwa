importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js')

const firebaseConfig = {
  apiKey: "AIzaSyB-xqr23XUxi-p9bqYgjtRWBPTsXdV6s-g",
  authDomain: "pwa-push-message.firebaseapp.com",
  projectId: "pwa-push-message",
  storageBucket: "pwa-push-message.appspot.com",
  messagingSenderId: "409350048234",
  appId: "1:409350048234:web:ea3c3f3ab11b8915a20a93",
  measurementId: "G-HJ9KHB28X6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const { title, body } = payload.notification;

  self.registration.showNotification(
    title,
    { body },
  );
});