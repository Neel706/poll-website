 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
 import {getDatabase , ref , set ,child,get} from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js'; 
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";

 const firebaseConfig = {
   apiKey: "AIzaSyABEdMzk6ANQDpCyUA7tJKQAQf5S7vDjwk",
   authDomain: "my-poll-app-60ee1.firebaseapp.com",
   databaseURL: "https://my-poll-app-60ee1-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "my-poll-app-60ee1",
   storageBucket: "my-poll-app-60ee1.appspot.com",
   messagingSenderId: "630561356187",
   appId: "1:630561356187:web:7733f1d1339a553fd5093e",
   measurementId: "G-ZMERHGPMHR"
 };
                  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()

let url = window.location.href

let tmp = url.split("!")

let id = tmp[1]

const dbref = ref(db)

get(child(dbref, `poll'/${id}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });


