import firebase from "firebase/app";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyCE1nFhxJRfbaXa6YkDAxEKEpn4kSALWEU",
  authDomain: "react-contact-5d83f.firebaseapp.com",
  databaseURL: "https://react-contact-5d83f-default-rtdb.firebaseio.com",
  projectId: "react-contact-5d83f",
  storageBucket: "react-contact-5d83f.appspot.com",
  messagingSenderId: "934871237408",
  appId: "1:934871237408:web:f8becf830d6414c2b68d45",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
