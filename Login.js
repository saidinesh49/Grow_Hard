// import { users, addUser } from './getUserInfo.js';

// let globalusername;
// let globalpoints;

// document.addEventListener("DOMContentLoaded", () => {
//     const loginButton = document.getElementById("loginButton");
//     if (loginButton) {
//         loginButton.addEventListener("click", CheckForUserLogin);
//     }

//     const createUserButton = document.getElementById("createUserButton");
//     if (createUserButton) {
//         createUserButton.addEventListener("click", () => {
//             const username = document.getElementById("new-username").value;
//             const email = document.getElementById("new-email").value;
//             const password = document.getElementById("new-password").value;
//             addUser({ username: username, password: password, email: email, points: 500 });
//             alert("User added!");
//             console.log(users);
//         });
//     }
// });

// function CheckForUserLogin() {
//     const username = document.querySelector("input[type='text'][name='username']").value;
//     const password = document.querySelector("input[type='password'][name='password']").value;
//     const valid = users.find(user => user.username === username && user.password === password);
//     if (valid) {
//         alert("Successfully logged in!");
//         window.location.replace("http://127.0.0.1:5500/Home.html");
//         localStorage.setItem('globalusername', username);
//         localStorage.setItem('globalpoints', valid.points);  // Correct this line
//         globalusername = username;
//         globalpoints = valid.points; // This line has no effect after redirection
//     } else {
//         alert("Invalid Entry!!");
//     }
//     return;
// }

// export { CheckForUserLogin , globalusername, globalpoints };
