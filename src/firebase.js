import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJ21HRKfGGXZbtfwSHvhFJnDhKH_nGQjk",
    authDomain: "todo-app-bb49c.firebaseapp.com",
    projectId: "todo-app-bb49c",
    storageBucket: "todo-app-bb49c.appspot.com",
    messagingSenderId: "56095292513",
    appId: "1:56095292513:web:268b229a2fb3d075f6fe20",
    measurementId: "G-7GP61N34RN"
});

const db = firebaseApp.firestore();

export default db;