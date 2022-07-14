import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

initializeApp({
    apiKey: "AIzaSyB0H4_g02LnODzv9vJhblaBVw4827OPlUU",
    authDomain: "instagram-cab28.firebaseapp.com",
    projectId: "instagram-cab28",
    storageBucket: "instagram-cab28.appspot.com",
    messagingSenderId: "480425053976",
    appId: "1:480425053976:web:68b9b691f5f9efbd5b186d",
    measurementId: "G-NC1PQ0EX89"
});

const auth = getAuth();
const storage = getStorage();

export {auth, storage};