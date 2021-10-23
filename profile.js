
//fill specif user details on page load
function LoadUser(){
    document.getElementById("FullName").innerHTML = localStorage.getItem("FullName");
    document.getElementById("Email").innerHTML = localStorage.getItem("Email");
    document.getElementById("Password").innerHTML = localStorage.getItem("Password");
    document.getElementById("BirthDate").innerHTML = localStorage.getItem("BirthDate");
    document.getElementById("Address").innerHTML = localStorage.getItem("Address");

}

window.onload = LoadUser();














