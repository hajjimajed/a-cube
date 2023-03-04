// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    getUser,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiYs-IeTFXtHp7zfFPee04FSGQ6p-0bcs",
    authDomain: "a-cube-7b700.firebaseapp.com",
    projectId: "a-cube-7b700",
    storageBucket: "a-cube-7b700.appspot.com",
    messagingSenderId: "253034115618",
    appId: "1:253034115618:web:e446d19a636fc8eccad07b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());

        batch.set(docRef, object);
    })


    await batch.commit();

    console.log('done');

}

export const getCategoriesAndDocuments = async (collectionKey) => {
    const collectionRef = collection(db, collectionKey);
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { items } = docSnapshot.data();

        return items;
    }, {})



    return categoryMap;

}