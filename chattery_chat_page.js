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

function logout(){
    window.location = "index.html";
}

