 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   // Your web app's Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyA4nvovoWxWXH1Olvd4VOjJyfdTEX3uL3c",
    authDomain: "instagram-clone-e31fe.firebaseapp.com",
    projectId: "instagram-clone-e31fe",
    storageBucket: "instagram-clone-e31fe.appspot.com",
    messagingSenderId: "41169945922",
    appId: "1:41169945922:web:a27f5c198a7fa5f5a074db"
  };
   // Initialize Firebase 
   firebase.initializeApp(firebaseConfig);

   const auth = firebase.auth();
 

   // initialise firestore
 const db = firebase.firestore();

 // Initialize Cloud Storage and get a reference to the service
// const storage = firebase.storage();
