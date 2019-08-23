import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyBuIyauQrCWffGbrfEB8iiv_Eusniew1r8",
    authDomain: "unicyclesolutions-bikeep.firebaseapp.com",
    databaseURL: "https://unicyclesolutions-bikeep.firebaseio.com",
    projectId: "unicyclesolutions-bikeep",
    storageBucket: "unicyclesolutions-bikeep.appspot.com",
    messagingSenderId: "158049798842",
    appId: "1:158049798842:web:b4e2ead6be0c4267"
};
let app = Firebase.initializeApp(config);
export const db = app;