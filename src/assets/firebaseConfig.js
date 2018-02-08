import Firebase from 'firebase'

//Firebase is installed thru npm,
//so there is no script cdn included in this project.
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCQh0OTmHQNELOwm2OfycPSGlfRrQh4KVY",
  authDomain: "contact-form-4cc95.firebaseapp.com",
  databaseURL: "https://contact-form-4cc95.firebaseio.com",
  projectId: "contact-form-4cc95",
  storageBucket: "contact-form-4cc95.appspot.com",
  messagingSenderId: "460670613740"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbFormRef = db.ref('Form');
