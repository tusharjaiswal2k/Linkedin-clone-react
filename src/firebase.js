import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD7JCSquPOScRss1WFtxoMZ6yyn7wFQIOE",
    authDomain: "linkedin-clone-a22dc.firebaseapp.com",
    projectId: "linkedin-clone-a22dc",
    storageBucket: "linkedin-clone-a22dc.appspot.com",
    messagingSenderId: "1057555316667",
    appId: "1:1057555316667:web:1ff5bbf72a4095f2cece9e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db ,auth};