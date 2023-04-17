import { initializeApp } from "firebase/app";import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHskOGNAGOc4K25Eml4m1TwcagQNPVRFE",
  authDomain: "todo-app-b23e8.firebaseapp.com",
  projectId: "todo-app-b23e8",
  storageBucket: "todo-app-b23e8.appspot.com",
  messagingSenderId: "992642453127",
  appId: "1:992642453127:web:fb0c567f4475fbbf9a3222",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
