import { validateUsername, validateEmail, validatePassword } from "./validators.js";
window.addEventListener('DOMContentLoaded', function() {
    //To check if the user exists already
    //if it does not
    if(!localStorage.getItem("users")) { //If users array does not exist already
       const users = []; //Create a user array andd store it below
       localStorage.setItem("users", JSON.stringify(users)); //Meaning this 
       // has created a key called users with the items in the array

    }

    const signUpForm = document.querySelector('form[name="sign-up-form"]');
    const nameInput = signUpForm.querySelector('input[name="username"]');
    const usernameError = document.querySelector('.username-error');
    const emailInput = signUpForm.querySelector('input[name="email"]');
    const emailError = document.querySelector('.email-error');
    const passwordInput = signUpForm.querySelector('input[name="password"]');
    const eyeSlash = document.querySelector('.fa-eye-slash');
    const eye = document.querySelector('.fa-eye');
    const passwordError = document.querySelector('.password-error');
    const unwantedSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-',
     '=', '+', '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '>',
     '?', '/', '`', '~', ' '];

            //For when eye is clicked
        eye.addEventListener('click', () => {
            passwordInput.type = 'text'; //To show password
            eyeSlash.style.display = 'inline';
            eye.style.display = 'none';
        });

        eyeSlash.addEventListener('click', () => {
            passwordInput.type = 'password';
            eyeSlash.style.display = 'none';
            eye.style.display = 'inline';
        });



    signUpForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;
        isValid = validateUsername(nameInput, usernameError, unwantedSymbols) && isValid;
        isValid = validateEmail(emailInput, emailError) && isValid;
        isValid = validatePassword(passwordInput, passwordError, unwantedSymbols) && isValid;

            //If everything passes and all the validation is passed
            if (isValid === true) {
                //To check if there are users in localstorage, if they are it wll retrieve it or fall back to an empty list
                const users = JSON.parse(localStorage.getItem('users')) || []
                //Add a new user with all of these info
                const newUser = {
                    username : nameInput.value.trim(),
                    email : emailInput.value.trim().toLowerCase(),
                    password : passwordInput.value
                };

                //.some means, is there at least one user in the array whose username or email matches that of the new user?
                //returns true if one is true
                const duplicateExists = users.some(user => user.email === newUser.email || user.username === newUser.username);
                //If duplicate exists, that is, if true
                if (duplicateExists) {
                    //Show an error message
                    alert("An account with this email or username already exists!")
                    nameInput.value = '';
                    emailInput.value = '';
                    passwordInput.value = '';
                    return; //Stop form submission
                } else {
                    alert("Sign Up successful🎉")
                    //Add the new user info into that array
                    users.push(newUser);
                    //Store it back into localStorage
                    localStorage.setItem('users', JSON.stringify(users));
                    //Saving the new user as current user
                    localStorage.setItem('currentUser', JSON.stringify(newUser));
                } 

                nameInput.value = '';
                emailInput.value = '';
                passwordInput.value = '';
                // Step 4: Redirect after a short delay
                window.location.href = 'quizdashboard.html'

            }
        });
});