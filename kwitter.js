  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBIvCxeRPnlncOydplvLXIDAdQS1QJpv6s",
    authDomain: "kwitter-revive.firebaseapp.com",
    databaseURL: "https://kwitter-revive-default-rtdb.firebaseio.com",
    projectId: "kwitter-revive",
    storageBucket: "kwitter-revive.appspot.com",
    messagingSenderId: "294593029594",
    appId: "1:294593029594:web:6d8181bcbac2e88ff8cce3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html";
}
