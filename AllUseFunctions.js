function Logoutuser(){
    alert("Successfully Logout!");
    localStorage.clear();
    window.location.replace('http://127.0.0.1:5500/Login.html');
   }

export { Logoutuser };