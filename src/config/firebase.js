import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDnTaww1E2u0nSRfj6C7s51wdcrRUQOAe0',
  authDomain: 'electroapp-nj12.firebaseapp.com',
  projectId: 'electroapp-nj12',
  storageBucket: 'electroapp-nj12.appspot.com',
  messagingSenderId: '449201446174',
  appId: '1:449201446174:web:9ba7a63872401e74b6fd0f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
