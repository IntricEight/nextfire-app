import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBSLgtNQPBVMNhQqxjyXRGWnOs9g9vMXNA",
    authDomain: "nextfire-app-94dc1.firebaseapp.com",
    projectId: "nextfire-app-94dc1",
    storageBucket: "nextfire-app-94dc1.appspot.com",
    messagingSenderId: "265577186730",
    appId: "1:265577186730:web:055b5381f063bba7ca97d3"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();