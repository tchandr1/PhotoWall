import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBbwJ2B00eCNN7vcoIUzwr-hxvDUNN01hE",
    authDomain: "photowall-a61e2.firebaseapp.com",
    databaseURL: "https://photowall-a61e2.firebaseio.com",
    projectId: "photowall-a61e2",
    storageBucket: "photowall-a61e2.appspot.com",
    messagingSenderId: "366722623268",
    appId: "1:366722623268:web:eee896fabd99cf3124f5b1",
    measurementId: "G-3D8Q4TJPER"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


var database = firebase.database()
export {database}