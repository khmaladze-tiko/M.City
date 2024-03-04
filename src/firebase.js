// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// // import { cityDb } from './temp/m-city-export';
// import { getFirestore, collection, doc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBWxoBc7M5MuubPP4NLv10C04A1C4rGijI",
//   authDomain: "mcity-2edba.firebaseapp.com",
//   projectId: "mcity-2edba",
//   storageBucket: "mcity-2edba.appspot.com",
//   messagingSenderId: "261789236340",
//   appId: "1:261789236340:web:31938c1657abfd0bd4e521",
//   measurementId: "G-PB4WBGJJHM",
// };
// console.log(firebase);
// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const DB = getFirestore(app);
// console.log(DB);
// const matchesCollection = collection(DB, "matches");
// const docRef = doc(matchesCollection, "SF")
// // const playersCollection = DB.collection('players');
// // const positionsCollection = DB.collection('positions');
// // const promotionsCollection = DB.collection('promotions');
// // const teamsCollection = DB.collection('teams');

// // cityDb.matches.forEach(item => {
// //   addDoc(collection(DB, "matches"), item);
// // });

// // cityDb.players.forEach(item => {
// //   addDoc(collection(DB, "players"), item);
// // });

// // cityDb.positions.forEach(item => {
// //   addDoc(collection(DB, "positions"), item);
// // });

// // cityDb.promotions.forEach(item => {
// //   addDoc(collection(DB, "promotions"), item);
// // });

// // cityDb.teams.forEach(item => {
// //   addDoc(collection(DB, "teams"), item);
// // });

// export {
//   firebase,
//   docRef,
//   // playersCollection,
//   // positionsCollection,
//   // promotionsCollection,
//   // teamsCollection
// };

// export default firebaseConfig;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// import { cityDb } from "./temp/m-city-export";



const firebaseConfig = {
  apiKey: "AIzaSyBWxoBc7M5MuubPP4NLv10C04A1C4rGijI",
  authDomain: "mcity-2edba.firebaseapp.com",
  projectId: "mcity-2edba",
  storageBucket: "mcity-2edba.appspot.com",
  messagingSenderId: "261789236340",
  appId: "1:261789236340:web:31938c1657abfd0bd4e521",
  measurementId: "G-PB4WBGJJHM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();
const matchesCollection = DB.collection("matches");
const playersCollection = DB.collection("players");
const positionsCollection = DB.collection("positions");
const promotionsCollection = DB.collection("promotions");
const teamsCollection = DB.collection("teams");

// cityDb.matches.forEach((item) => {
//   matchesCollection.add(item);
// });
// cityDb.players.forEach((item) => {
//   playersCollection.add(item);
// });
// cityDb.positions.forEach((item) => {
//   positionsCollection.add(item);
// });
// cityDb.promotions.forEach((item) => {
//   promotionsCollection.add(item);
// });
// cityDb.teams.forEach((item) => {
//   teamsCollection.add(item);
// });

export {
  firebase,
  matchesCollection,
  playersCollection,
  positionsCollection,
  promotionsCollection,
  teamsCollection,
};
