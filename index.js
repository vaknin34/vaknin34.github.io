
//firebase api
const firebaseConfig = {
  apiKey: "AIzaSyDTuh-Qc9Lnf94kvpsY8K0xCdSMj3SXkyE",
  authDomain: "niv-project-28e26.firebaseapp.com",
  projectId: "niv-project-28e26",
  storageBucket: "niv-project-28e26.appspot.com",
  messagingSenderId: "893398516301",
  appId: "1:893398516301:web:91d8309e5d0fffd5be5204",
  measurementId: "G-W5W9D0QJ92"
};


//intilize db
firebase.initializeApp(firebaseConfig);
const dbRef =  firebase.database().ref();


//login function using firbase auth service + pull user data from db
function login(event){
  event.preventDefault();
  var user_email = document.getElementById("email_field").value;
  var user_password = document.getElementById("password_field").value;
  firebase.auth().signInWithEmailAndPassword(user_email, user_password).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error signing in, ",errorMessage);
    alert(error.message);
  }).then(function(user){
    if(user){
      alert("Welcome back you are loggen in");
      var currentUserUid = firebase.auth().currentUser.uid;
      dbRef.child("Users").child(currentUserUid).once("value").then((snapshot)=>{
        if(snapshot.exists()){
          localStorage.setItem("FullName",snapshot.child("FullName").val());
          localStorage.setItem("Email",snapshot.child("Email").val());
          localStorage.setItem("Password",snapshot.child("Password").val());
          localStorage.setItem("Address",snapshot.child("Address").val());
          localStorage.setItem("BirthDate",snapshot.child("BirthDate").val());
          location.href = "./Profile.html";
        }else{
          console.log("not exsit data");
        }
      }).catch((error)=>{
        console.log(error);
      });
    }
  });
}

//logout and clear user data
function logout(){
  firebase.auth().signOut().then(function(){
  }).catch(function(error){
  });
  localStorage.clear();
  location.href = "./index.html";
}










