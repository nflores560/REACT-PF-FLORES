import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDGQZoWAz4mbSHhtEFf4AaYUvwZTlDSIOg",
    authDomain: "miproyectoreactflores.firebaseapp.com",
    projectId: "miproyectoreactflores",
    storageBucket: "miproyectoreactflores.appspot.com",
    messagingSenderId: "326802707963",
    appId: "1:326802707963:web:f98a00747f1f63d114e75e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebaseApp.firestore();
  const storage = firebase.storage();

  export { auth, db, storage };
