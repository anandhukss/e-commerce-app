import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyBs1WVUA0RrmKbYInsBwzOgcQ6G19LiEno",
    authDomain: "e-mart-63653.firebaseapp.com",
    projectId: "e-mart-63653",
    storageBucket: "e-mart-63653.appspot.com",
    messagingSenderId: "415374867767",
    appId: "1:415374867767:web:d75cea91fd1bb0ba6a6eb2",
    measurementId: "G-XW79CTSGZX"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const SigninWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;