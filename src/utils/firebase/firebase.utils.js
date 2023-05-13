import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD8f75GXYXSYhUnwS1p_Y0VGoBfajqXxcc',

  authDomain: 'cap-clothes-db.firebaseapp.com',

  projectId: 'cap-clothes-db',

  storageBucket: 'cap-clothes-db.appspot.com',

  messagingSenderId: '619826276173',

  appId: '1:619826276173:web:6a66f41e4f9192da5f7904',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// get the user object
export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

// export const signInWithGoogleRedirect = () => {
//   return signInWithRedirect(auth, googleProvider);
// };

// connect to db and execute CRUD on it
export const db = getFirestore();
export const createUserDocumentFromAuth = async function (userAuth) {
  const userDocumentRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocumentRef);

  //check if user document exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocumentRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log('Error creating the user', err.message);
    }
  }
  return userDocumentRef;
};

export async function createAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signInAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}