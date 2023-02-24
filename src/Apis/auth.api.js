import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.config";

const userRegister = async (userData) => {
  return await createUserWithEmailAndPassword(
    auth,
    userData?.emailID,
    userData?.password
  );
};

const userLogin = async (userData) => {
  return await signInWithEmailAndPassword(
    auth,
    userData?.emailID,
    userData?.password
  );
};

const userUpdate = async (userName) => {
  console.log(auth.currentUser);
  return await updateProfile(auth.currentUser, {
    displayName: userName,
  });
};

const googleSignin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

const googleSignout = () => {
  return signOut(auth);
};

export { userRegister, userLogin, userUpdate, googleSignin, googleSignout };
