import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "./firebaseConfig";

export const login = async ({ email, password }) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUp = async ({ email, password }) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return signOut(auth);
};
