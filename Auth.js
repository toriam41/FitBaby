import firebase from 'firebase/app';
import 'firebase/auth';

export const createUserWithEmailAndPassword = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return firebase.auth().signOut();
};

export const onAuthStateChanged = (callback) => {
  return firebase.auth().onAuthStateChanged(callback);
};

export const currentUser = () => {
  return firebase.auth().currentUser;
};
