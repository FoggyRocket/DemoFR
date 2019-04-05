import Firebase from 'firebase';  
let config = {  
    apiKey: "AIzaSyADcNSvJMC445tL7RtMuvJTI50O9xneRmA",
    authDomain: "demofirebase-c5487.firebaseapp.com",
    databaseURL: "https://demofirebase-c5487.firebaseio.com",
    projectId: "demofirebase-c5487",
    storageBucket: "demofirebase-c5487.appspot.com",
    messagingSenderId: "26308318836"
};
let app = Firebase.initializeApp(config);  
export const db = app.database();  