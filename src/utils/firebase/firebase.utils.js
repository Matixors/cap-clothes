import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD8f75GXYXSYhUnwS1p_Y0VGoBfajqXxcc',

  authDomain: 'cap-clothes-db.firebaseapp.com',

  projectId: 'cap-clothes-db',

  storageBucket: 'cap-clothes-db.appspot.com',

  messagingSenderId: '619826276173',

  appId: '1:619826276173:web:6a66f41e4f9192da5f7904',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = function () {
  return signInWithPopup(auth, provider);
};
