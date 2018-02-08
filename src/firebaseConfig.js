import Firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBalrhrd5hjfB-Ff1glGOqJeBI0moCtRbw",
  authDomain: "exor-ffdab.firebaseapp.com",
  databaseURL: "https://exor-ffdab.firebaseio.com",
  projectId: "exor-ffdab",
  storageBucket: "exor-ffdab.appspot.com",
  messagingSenderId: "998463118303"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbStaffRef = db.ref('Staff');
