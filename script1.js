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
console.log(url)
let tmp = url.split("?")

let id = tmp[1]

console.log(id)
const dbref = ref(db)


get(child(dbref, `poll/${id}`)).then((snapshot) => {
    console.log(`poll/${id}`)
    if (snapshot.exists()) {
      console.log(snapshot.val());
      let poll = snapshot.val()
      let name = document.getElementById('h1-for-poll-name')
      name.innerHTML = poll.name
      let div = document.getElementById('div-options')
      for (let i=0;i<poll.options.length;i++){
          let option = poll.options[i]
          let btn = document.createElement('button')
          btn.innerHTML = option
          btn.setAttribute("class","btn btn-outline-primary btn-style-1") 
          btn.setAttribute("type","button")
          div.append(btn)
      }
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });



