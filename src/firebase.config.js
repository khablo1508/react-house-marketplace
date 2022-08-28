import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBqI8ZfiZdU-TXWAf7rwTDtikj2lzYhY4o',
  authDomain: 'house-marketplace-app-5733b.firebaseapp.com',
  projectId: 'house-marketplace-app-5733b',
  storageBucket: 'house-marketplace-app-5733b.appspot.com',
  messagingSenderId: '481401313021',
  appId: '1:481401313021:web:8131e57d83c09d786bd094',
};

// Initialize Firebase
export const db = getFirestore(initializeApp(firebaseConfig));
