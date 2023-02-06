import { db } from "../config/firebase.config";
import { getDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { create } from "zustand";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
} from "firebase/auth";

export const useStore = create((set, get) => ({
  user: {},
  userId: null,
  signUp: async (person) => {
    const auth = getAuth();
    try {
      console.log(person, "aye we here");
      await createUserWithEmailAndPassword(auth, person.email, person.password);
      await setDoc(doc(db, "users", person.email), person, { merge: true });
    } catch (error) {
      console.log(error.message, "aye wrong sign up");
    }
  },
  login: async (person) => {
    const auth = getAuth();
    try {
      console.log(person, "aye we here");
      await signInWithEmailAndPassword(auth, person.email, person.password);
      const user = auth.currentUser;
      console.log(user?.uid, " aye logged in ");
      sessionStorage.setItem("userId", user.uid);
      set({userId:user?.uid})
    } catch (error) {
      console.log(error.message, "aye wrong login");
    }
  },
  logout: async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      sessionStorage.setItem("userId", "");
      console.log("logged out");
    } catch (error) {
      console.log(error.message, "aye wrong login");
    }
  },
}));
