import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
const fbConfig = {
    apiKey: "AIzaSyC3mVmh5beBRxC1NwZTWSVjN9EmGCYtg6Y",
    authDomain: "project-manager-in-reactjs.firebaseapp.com",
    databaseURL: "https://project-manager-in-reactjs.firebaseio.com",
    projectId: "project-manager-in-reactjs",
    storageBucket: "project-manager-in-reactjs.appspot.com",
    messagingSenderId: "427352758321",
    appId: "1:427352758321:web:218ce9483a84e5292e5d10",
    measurementId: "G-PX90GHV7G2"
  };


  
  // Initialize Firebase
  firebase.initializeApp(fbConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots:true});
  export default firebase;