// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDD7P6o7K5W1vq3IRGAbtdqvDaE4d_h0qs",
    authDomain: "letschat-73513.firebaseapp.com",
    databaseURL: "https://letschat-73513-default-rtdb.firebaseio.com",
    projectId: "letschat-73513",
    storageBucket: "letschat-73513.appspot.com",
    messagingSenderId: "909249189676",
    appId: "1:909249189676:web:ae7fe6a959d2d750e3fe89"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



