import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdag9tDq6ZwQePF3fKRcZNlIUt2en4rkg",
    authDomain: "chat-app-ff465.firebaseapp.com",
    projectId: "chat-app-ff465",
    storageBucket: "chat-app-ff465.appspot.com",
    messagingSenderId: "175289912758",
    appId: "1:175289912758:web:a43a7561724ad377bfc517"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };