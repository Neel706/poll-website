 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
 import {getDatabase , ref , set } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js'; 
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

function submit123(){    
    let poll_name = document.querySelector('#pollname').value
    let no_options = document.querySelector('#selection').value
    let options={}
    let object = {}
    let time = gettimestamp()
    let id = time
    object["name"]=poll_name
    for (let i=0;i<no_options;i++){
        let items={}
        items["opt"] =  document.querySelector('#option'+i).value 
        items["value"] = 0
        options[i] = items
    }
    object["options"]=options
    const dbref = ref(db,'poll/'+id)
    let url = "preview.html?"+id
    set(dbref,object)
    window.open(url)
    // setTimeout(location.reload(),5000)
    setTimeout(() => {
        console.log("printed")
        location.reload()
    }, 3000);




}

function gettimestamp() {
    let currentdate = new Date()
    let date = currentdate.getDate()
    let month = currentdate.getMonth()
    let year = currentdate.getFullYear()
    let time = currentdate.getTime()

    return date+"e"+month+"e"+year+"e"+time
}


document.getElementById('button-submit').addEventListener('click',()=>{
    const option_ui = document.getElementById('selection')

    let n = parseInt(option_ui.value)
    const error_ui = document.getElementById('error')

    if (n<1 || n>5){
        error_ui.innerHTML = "select a number greater than 0 or smaller than 5"
    }
    else{
        error_ui.innerHTML = ""
        let optionlist_ui = document.getElementById('option-list')

        for ( let i=0;i<n;i++){
            let label_ui = document.createElement('label')
            label_ui.setAttribute("class","form-label")
            label_ui.innerHTML = "Option-"+(i+1)
            let input_ui = document.createElement('input')
            input_ui.setAttribute("class","form-control")
            input_ui.setAttribute("id","option"+i)
            input_ui.setAttribute("type","text")
            input_ui.setAttribute("placeholder","your text here")
            input_ui.setAttribute("value","")
            optionlist_ui.appendChild(label_ui)
            optionlist_ui.appendChild(input_ui)
        }
        let button=document.getElementById('button-submit')

        button.remove()
        const btn_div=document.getElementById('btn')
        let new_button=document.createElement('button')
        new_button.innerHTML = "Submit"
        new_button.setAttribute("class","btn btn-primary")
        new_button.setAttribute("id","new-button")
        new_button.setAttribute("type","button")
        new_button.onclick = function() { submit123() };
        btn_div.append(new_button)

    }
})










