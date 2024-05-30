    import { getGlobalUserName, getGlobalUserPoints } from "./GamePlayDetails";
    
    let Logout=document.getElementById('Logout');
    let username = getGlobalUserName();
    let userPoints = getGlobalUserPoints();
    document.getElementById('displayUsername').textContent = username ? `${username}` : 'Username not set';
    document.getElementById('displayUserPoints').textContent = userPoints ? `${userPoints}` : 'Points not available';
    
    if (!username) {
        window.location.replace("/");
    }

    
    function Logoutuser(){
     alert("Successfully Logout!");
     localStorage.clear();
     username="";
     window.location.replace('/');
    }

    Logout.addEventListener('click',Logoutuser);

