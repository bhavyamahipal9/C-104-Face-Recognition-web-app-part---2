function add_user(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    console.log("user name" + user_name);
    window.location = "chattery_room.html";
}
