import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCE1nFhxJRfbaXa6YkDAxEKEpn4kSALWEU",
  authDomain: "react-contact-5d83f.firebaseapp.com",
  databaseURL: "https://react-contact-5d83f-default-rtdb.firebaseio.com",
  projectId: "react-contact-5d83f",
  storageBucket: "react-contact-5d83f.appspot.com",
  messagingSenderId: "934871237408",
  appId: "1:934871237408:web:f8becf830d6414c2b68d45",
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyCE1nFhxJRfbaXa6YkDAxEKEpn4kSALWEU",
//   authDomain: "react-contact-5d83f.firebaseapp.com",
//   databaseURL: "https://react-contact-5d83f-default-rtdb.firebaseio.com",
//   projectId: "react-contact-5d83f",
//   storageBucket: "react-contact-5d83f.appspot.com",
//   messagingSenderId: "934871237408",
//   appId: "1:934871237408:web:f8becf830d6414c2b68d45",
// };

// // Initialize Firebase
// // const firebase = initializeApp(firebaseConfig);
// const db = getFirestore();
// const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);
// // export { firebase, db };
