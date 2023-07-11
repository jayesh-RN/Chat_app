import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAyl9_w1JhNPyfAwb07_QqrHORYWdr_fHQ",
  authDomain: "chatapp-a7f0d.firebaseapp.com",
  projectId: "chatapp-a7f0d",
  storageBucket: "chatapp-a7f0d.appspot.com",
  messagingSenderId: "379160762701",
  appId: "1:379160762701:web:c08b205e726a0d955d3f04",
  measurementId: "G-R06765Z6F1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
