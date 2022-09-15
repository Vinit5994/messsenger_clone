import { initializeApp } from 'firebase/app';

import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyBg8Or6HQDw-my0J4y4JzamdjKDz-GHRPA",
  authDomain: "messenger-clone-da2c0.firebaseapp.com",
  projectId: "messenger-clone-da2c0",
  storageBucket: "messenger-clone-da2c0.appspot.com",
  messagingSenderId: "624622267313",
  appId: "1:624622267313:web:af3183baaf82c838fc2b90",
  measurementId: "G-YEHDLMP5G9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;