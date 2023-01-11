import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBnYRVrfO5j54HSq6fDsnwd92SxGPcmGoA",
  authDomain: "eventos2-b2dba.firebaseapp.com",
  projectId: "eventos2-b2dba",
  storageBucket: "eventos2-b2dba.appspot.com",
  messagingSenderId: "450815079917",
  appId: "1:450815079917:web:98788b7d2e853cdda6a3e4"
};


export default firebase.initializeApp(firebaseConfig);

