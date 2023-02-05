import { db } from "../config/firebase.config";
import { getDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { create } from "zustand";

export const useStore = create((set) => ({
  signUp: async (person) => {
    try {
      console.log(person, "aye we here");
      await setDoc(
        doc(db, 'users', person.email),
       person,
        {merge: true},
      );
    } catch (error) {
      console.log(error.message, "aye wrong");
    }
  },
}));
