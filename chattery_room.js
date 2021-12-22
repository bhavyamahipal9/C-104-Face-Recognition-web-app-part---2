var firebaseConfig = {
    apiKey: "AIzaSyCkifblePQMiC1RciLYhBuw4t329JUF1k4",
    authDomain: "bhavya-yarkvw.firebaseapp.com",
    databaseURL: "https://bhavya-yarkvw.firebaseio.com",
    projectId: "bhavya-yarkvw",
    storageBucket: "bhavya-yarkvw.appspot.com",
    messagingSenderId: "341105908819",
    appId: "1:341105908819:web:9d4cd2eaa7fecba2597aa6"
  };

firebase.initializeApp(firebaseConfig);

function welcome(){
user_name = localStorage.getItem("user_name");
document.getElementById("welcome_message").innerHTML = "Welcome " + user_name + "!";
}

function add_room(){
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "add room name"
    });
    window.location = "chattery_chat_page.html";
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr style='width: 70%;'>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
