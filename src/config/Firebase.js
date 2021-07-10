import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyARSMM-nQvuF2THqOIZwYOcrZNMeAvtwA8",
  authDomain: "hotel-management-system-5b75b.firebaseapp.com",
  projectId: "hotel-management-system-5b75b",
  storageBucket: "hotel-management-system-5b75b.appspot.com",
  messagingSenderId: "883440074454",
  appId: "1:883440074454:web:8fa392ddeb8228e6981377"
};
  
export default firebase.initializeApp(firebaseConfig);