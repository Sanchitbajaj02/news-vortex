import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.config";

import { UserDataType } from "../@types/index.d";

const userRegister = async (userData: UserDataType) => {
  if (userData?.emailID === undefined || userData?.password === undefined) {
    throw new Error("Username is required");
  }
  return await createUserWithEmailAndPassword(
    auth,
    userData?.emailID,
    userData?.password
  );
};

const userLogin = async (userData: UserDataType) => {
  if (userData?.emailID === undefined || userData?.password === undefined) {
    throw new Error("Username is required");
  }
  return await signInWithEmailAndPassword(
    auth,
    userData?.emailID,
    userData?.password
  );
};

const userUpdate = async (userName: string) => {
  console.log(auth.currentUser);
  if (auth.currentUser !== null) {
    return await updateProfile(auth.currentUser, {
      displayName: userName,
    });
  }
};

const googleSignin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

const googleSignout = () => {
  return signOut(auth);
};

export { userRegister, userLogin, userUpdate, googleSignin, googleSignout };
