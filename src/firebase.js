import { initializeApp } from "firebase/app";
import {getAuth,
       createUserWithEmailAndPassword,
       signInWithEmailAndPassword,
       signOut} from "firebase/auth";
import {addDoc,
        collection,
        getFirestore} from "firebase/firestore";
import { useId } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyD83fnI-VCEUjU1QY-30s0PP-DlwxbOXpc",
  authDomain: "netflix-clone-b8a1a.firebaseapp.com",
  projectId: "netflix-clone-b8a1a",
  storageBucket: "netflix-clone-b8a1a.firebasestorage.app",
  messagingSenderId: "155304363614",
  appId: "1:155304363614:web:b44c62bd23271257d4d6cf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try{
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db,"users"),{
        useId: user.uid,
        name,
        email,
        authProvider: "local",
       })
    }
    catch(error) {
        console.error("Error signing up:", error);
        alert(error);
    }
}

const login = async (email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }catch(error) {
        console.error("Error logging in:", error);
        alert(error);
    }
}

const logout = async () => {
    try{
        signOut(auth);
    }catch(error) {
        console.error("Error logging out:", error);
        alert(error);
    }
}

export {auth, db, login, signup, logout};