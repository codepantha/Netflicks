import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFbLY2WKCMpO9noC8g8_LgM0_dAZYXoB4',
  authDomain: 'netflicks-290c3.firebaseapp.com',
  projectId: 'netflicks-290c3',
  storageBucket: 'netflicks-290c3.appspot.com',
  messagingSenderId: '1059466372978',
  appId: '1:1059466372978:web:d8498615c61ad194be1feb'
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const auth = getAuth();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return undefined;
  const user = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const authenticateUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return undefined;
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const getCurrentUser = () => new Promise((resolve, reject) => {
  const unsubscribe = onAuthStateChanged(
    auth,
    (authUser) => {
      unsubscribe();
      resolve(authUser);
    },
    reject
  );
});

export default db;
