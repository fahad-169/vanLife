// npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdaoRmsmrq3y6_D-E_tIKRV9rGm53cSFE",
    authDomain: "vanlife-78cde.firebaseapp.com",
    projectId: "vanlife-78cde",
    storageBucket: "vanlife-78cde.firebasestorage.app",
    messagingSenderId: "589334903502",
    appId: "1:589334903502:web:4b980e48686aead1ea2e9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2025, 1, 14);
//     }
//   }
// }
