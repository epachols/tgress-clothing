import firebase from "firebase/app";
//selective imports of firestore (for db)
import "firebase/firestore";
//and auth
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-T8PINLp3wIdKTLIHMza_TOc7Rl8QRrA",
  authDomain: "tgress-db.firebaseapp.com",
  databaseURL: "https://tgress-db.firebaseio.com",
  projectId: "tgress-db",
  storageBucket: "tgress-db.appspot.com",
  messagingSenderId: "1067395577539",
  appId: "1:1067395577539:web:40f364d3e835d535039476",
  measurementId: "G-VCGWJ9C1DQ",
};

//making a firestore userprofile doc so we save our own users in the db.
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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// reusable for adding data into firestore.
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  // whe commit succeeds it resolves a null value
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {})
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
