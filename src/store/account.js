import { db } from "../config/firebase.config";
import {getDoc, doc, setDoc, serverTimestamp} from 'firebase/firestore';

export const useStore = create((set) => ({
    signUp: async (payload) => {
     
  
      try {
       
      } catch (error) {
        toast(error.message, { ...config, type: "error" });
      }
    },
  }));
  