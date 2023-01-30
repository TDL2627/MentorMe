import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAlUF6zeD-gLuogOK80pYFOsGxSXQ0azpc",
  authDomain: "mentorme-uni.firebaseapp.com",
  projectId: "mentorme-uni",
  storageBucket: "mentorme-uni.appspot.com",
  messagingSenderId: "1073549751188",
  appId: "1:1073549751188:web:e5cf7bf1233b2322dd5581"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
let analytics;
if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export {db, storage, analytics};
