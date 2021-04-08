// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase, { firestore } from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBDSUmlYEw44J-zrPSTs7SHs0kK3idYBds",
    authDomain: "facebook-clone-94e0b.firebaseapp.com",
    projectId: "facebook-clone-94e0b",
    storageBucket: "facebook-clone-94e0b.appspot.com",
    messagingSenderId: "268783185820",
    appId: "1:268783185820:web:7db771760a479df61e6259",
    measurementId: "G-13EG60MKS9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db ;

