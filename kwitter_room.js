const firebaseConfig = {
      apiKey: "AIzaSyBMD3JtcUdiy0M5lOX6dLfqBGBLRuMfbiE",
      authDomain: "kwitter-baa46.firebaseapp.com",
      databaseURL: "https://kwitter-baa46-default-rtdb.firebaseio.com",
      projectId: "kwitter-baa46",
      storageBucket: "kwitter-baa46.appspot.com",
      messagingSenderId: "501739628190",
      appId: "1:501739628190:web:f4f99638a01bd73bf17d8f"
    };
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
