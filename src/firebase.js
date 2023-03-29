// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTTq2ctqoRH6J2lS4LrzlNK1jNcpOaZnw",
  authDomain: "medfolio-fd227.firebaseapp.com",
  projectId: "medfolio-fd227",
  storageBucket: "medfolio-fd227.appspot.com",
  messagingSenderId: "688892786316",
  appId: "1:688892786316:web:bf8b436c1e86d32ab2eda9",
  measurementId: "G-92K4023NYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage, app };