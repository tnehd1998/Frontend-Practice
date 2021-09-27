import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5PHtg4lKI9PV3U5Ns1bPXl8aq2qW4AWk",
  authDomain: "crwn-db-9bf56.firebaseapp.com",
  projectId: "crwn-db-9bf56",
  storageBucket: "crwn-db-9bf56.appspot.com",
  messagingSenderId: "973687470237",
  appId: "1:973687470237:web:dc1c9084dfb34f877a3c74",
  measurementId: "G-ZZ0H7CKY6W",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;