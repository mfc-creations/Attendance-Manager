import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBU4ygc5d4nMIW95ReKGsymT9KJQDRArwk",
  authDomain: "attendance-management-2dac2.firebaseapp.com",
  databaseURL: "https://attendance-management-2dac2.firebaseio.com",
  projectId: "attendance-management-2dac2",
  storageBucket: "attendance-management-2dac2.appspot.com",
  messagingSenderId: "906385042573",
  appId: "1:906385042573:web:06c50ede7bdbbf8e5a06c4",
  measurementId: "G-GY5MK98THR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
