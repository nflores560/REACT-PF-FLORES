import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDGQZoWAz4mbSHhtEFf4AaYUvwZTlDSIOg",
    authDomain: "miproyectoreactflores.firebaseapp.com",
    projectId: "miproyectoreactflores",
    storageBucket: "miproyectoreactflores.appspot.com",
    messagingSenderId: "326802707963",
    appId: "1:326802707963:web:f98a00747f1f63d114e75e"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export { auth, db, storage };
