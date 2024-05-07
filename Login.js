document.addEventListener("DOMContentLoaded", function() {
    let loginForm = document.querySelector(".signin");
    let signupForm = document.querySelector(".signup");
    let forgotForm = document.querySelector(".forgot");
    let verifyForm = document.querySelector(".verify");
    let updateForm = document.querySelector(".update");

    let loginLink = document.querySelector(".login");
    let createAccountLink = document.querySelector(".create");
    let forgotPasswordLink = document.querySelector(".forgotpassword");

    // Function to hide all forms
    function hideAllForms() {
        if (loginForm) loginForm.style.display = 'none';
        if (signupForm) signupForm.style.display = 'none';
        if (forgotForm) forgotForm.style.display = 'none';
        if (verifyForm) verifyForm.style.display = 'none';
        if (updateForm) updateForm.style.display = 'none';
    }

    // Adding checks before adding event listeners
    if (loginLink) {
        loginLink.addEventListener("click", function() {
            hideAllForms();
            if (loginForm) loginForm.style.display = 'flex';
        });
    }

    if (createAccountLink) {
        createAccountLink.addEventListener("click", function() {
            hideAllForms();
            if (signupForm) signupForm.style.display = 'flex';
        });
    }

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", function() {
            hideAllForms();
            if (forgotForm) forgotForm.style.display = 'flex';
        });
    }

    // Initially show only the login form
    hideAllForms();
    if (loginForm) loginForm.style.display = 'flex';
});
