import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBWxoBc7M5MuubPP4NLv10C04A1C4rGijI",
    authDomain: "mcity-2edba.firebaseapp.com",
    projectId: "mcity-2edba",
    storageBucket: "mcity-2edba.appspot.com",
    messagingSenderId: "261789236340",
    appId: "1:261789236340:web:31938c1657abfd0bd4e521",
    measurementId: "G-PB4WBGJJHM"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   const app = initializeApp(firebaseConfig);

  export {
    firebase
  }

// export default firebaseConfig;