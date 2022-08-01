import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCosY16RNIk9ajXIS-UElt_OojD88ZUdzc",
  authDomain: "farmeasy-653b3.firebaseapp.com",
  projectId: "farmeasy-653b3",
  storageBucket: "farmeasy-653b3.appspot.com",
  messagingSenderId: "173816330118",
  appId: "1:173816330118:web:024c4f2059a361448d1e07",
  measurementId: "G-G7X2EDRJT0"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
