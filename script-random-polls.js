 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
 import {getDatabase,ref,set,child,get,} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyABEdMzk6ANQDpCyUA7tJKQAQf5S7vDjwk",
  authDomain: "my-poll-app-60ee1.firebaseapp.com",
  databaseURL:"https://my-poll-app-60ee1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-poll-app-60ee1",
  storageBucket: "my-poll-app-60ee1.appspot.com",
  messagingSenderId: "630561356187",
  appId: "1:630561356187:web:7733f1d1339a553fd5093e",
  measurementId: "G-ZMERHGPMHR",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();


const dbref = ref(db)

get(child(dbref,'poll')).then((snapshot) => {
    if (snapshot.exists()){
        let poll=snapshot.val()
        let div = document.getElementById("div-polls");
        let poll_values=Object.values(poll)
        for(let i=0;i<poll_values.length;i++){
            let btn = document.createElement('button')
            btn.setAttribute('class','btn btn-outline-primary btn-style-1 poll-random')
            btn.setAttribute('type','button')
            let poll_name=document.createElement('h4')
            poll_name.innerHTML=poll_values[i].name
            btn.appendChild(poll_name)
            let author=document.createElement('p')
            author.innerHTML="null"
            btn.appendChild(author)
            div.append(btn)
        }
    }
    
    
}).catch((error)=>{
    console.error(error)
})
