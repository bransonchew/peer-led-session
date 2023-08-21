// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBPt3cB7P3rq_0U_wGCkrxzzmoD_WkAshU',
    authDomain: 'peer-led-session.firebaseapp.com',
    projectId: 'peer-led-session',
    storageBucket: 'peer-led-session.appspot.com',
    messagingSenderId: '53318135883',
    appId: '1:53318135883:web:3e77ddc5136da4ac535dce'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)