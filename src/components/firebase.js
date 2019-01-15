import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBLqOoZ682U2k2ABGcpiuYxTP1H-sq72ko",
    authDomain: "kweta-henry-blog.firebaseapp.com",
    databaseURL: "https://kweta-henry-blog.firebaseio.com",
    projectId: "kweta-henry-blog",
    storageBucket: "kweta-henry-blog.appspot.com",
    messagingSenderId: "338885635585"
  };
firebase.initializeApp(config);

export default firebase;