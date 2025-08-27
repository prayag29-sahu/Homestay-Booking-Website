
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { auth } from './firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut as firebaseSignOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    updatePassword,
    updateProfile
} from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

export const doSignInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    return await signInWithPopup(auth, provider);
};

export const doSignOut = () => firebaseSignOut(auth);

export const doSendEmailVerification = () =>
    sendEmailVerification(auth.currentUser);

export const doSendPasswordResetEmail = (email) =>
    sendPasswordResetEmail(auth, email);

export const doUpdatePassword = (password) =>
    updatePassword(auth.currentUser, password);

export const doUpdateProfile = (profile) =>
    updateProfile(auth.currentUser, profile);

export { auth };