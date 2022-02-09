// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDbfe7sjbfY3ack_iLAEp84QWoiQ_CYiQY",
      authDomain: "kwitterakshit.firebaseapp.com",
      databaseURL: "https://kwitterakshit-default-rtdb.firebaseio.com",
      projectId: "kwitterakshit",
      storageBucket: "kwitterakshit.appspot.com",
      messagingSenderId: "41193646220",
      appId: "1:41193646220:web:367aa3a021206acb61f3a9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick ='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}