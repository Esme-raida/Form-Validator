import { validatePassword } from "./validators.js";

window.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.querySelector('form[name="login-form"]');
    const usernameEntry = loginForm.querySelector('input[name="username"]');
    const passwordEntry = loginForm.querySelector('input[name="password"]');
    const eyeIcon = document.getElementById('hide-password');
    const eyeSlashIcon = document.getElementById('show-password');
    const forgotPassword = document.querySelector('.forgot-password');

    //FORGOT PASSWORD FEATURE
    const resetPasswordForm = document.querySelector('form[name="reset-password-form"]');
    const usernameResetEntry = resetPasswordForm.querySelector('input[name="reset-username"]');
    const passwordResetEntry = resetPasswordForm.querySelector('input[name="reset-password"]');
    const resetHidePassword1  = document.getElementById('reset-hide-password');
    const resetShowPassword1 = document.getElementById('reset-show-password');
    const confirmPasswordResetEntry = resetPasswordForm.querySelector('input[name="confirm-password"]');
    const resetHidePassword2  = document.getElementById('reset-hide-password-confirm');
    const resetShowPassword2 = document.getElementById('reset-show-password-confirm');
    const closeButton = document.querySelector(".close-btn");
    const passwordResetError = document.querySelector('.password-error');


    //RESET PASSWORD FORM FUNCTIONALITY
    resetPasswordForm.addEventListener('submit', function(e) {
        console.log("Reset password form submitted")
        e.preventDefault();
        const username = usernameResetEntry.value.trim();
        const newPassword = passwordResetEntry.value;

        //To validate and stop
        let isValid = validatePassword(passwordResetEntry, passwordResetError);
        if (!isValid) return;

        const confirmNewPassword = confirmPasswordResetEntry.value;  
        //To check if user exists
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some(user => user.username === username );
        if (!userExists) {
            alert('User not found');
            return;
        } else {
            if(newPassword !== confirmNewPassword) {
                console.log('Confirming password!')
                passwordResetError.textContent = 'Passwords do not match, try again!'
                return;
            } else {
                const currentUserName = users.find(user => user.username === username );
                if (currentUserName) {
                    currentUserName.password = confirmNewPassword;
                    localStorage.setItem("users", JSON.stringify(users));
                    alert('Password updated successfully!');
                    usernameResetEntry.value = '';
                    passwordResetEntry.value = '';
                    confirmPasswordResetEntry.value = '';
                    resetPasswordForm.style.display = 'none';
                    loginForm.style.display = 'flex';
                } 
            }
        }
    });

    // Toggle password visibility in reset form - first password field
    resetHidePassword1.addEventListener('click', function() {
        passwordResetEntry.type = 'password';
        resetHidePassword1.style.display = 'none';
        resetShowPassword1.style.display = 'inline';
    });
    resetShowPassword1.addEventListener('click', function() {
        passwordResetEntry.type = 'text';
        resetHidePassword1.style.display = 'inline';
        resetShowPassword1.style.display = 'none';
    });

    // Toggle password visibility in reset form - confirm password field
    resetHidePassword2.addEventListener('click', function() {
        confirmPasswordResetEntry.type = 'password';
        resetHidePassword2.style.display = 'none';
        resetShowPassword2.style.display = 'inline';
    });
    resetShowPassword2.addEventListener('click', function() {
        confirmPasswordResetEntry.type = 'text';
        resetHidePassword2.style.display = 'inline';
        resetShowPassword2.style.display = 'none';
    });
    
    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        resetPasswordForm.style.display = 'none';
        loginForm.style.display = 'flex';
    });

    //LOGIN FORM FUNCTIONALITY

        // Toggle password visibility in reset form - confirm password field
    eyeIcon.addEventListener('click', function() {
        passwordEntry.type = 'password';
        eyeIcon.style.display = 'none';
        eyeSlashIcon.style.display = 'inline';
    });
    
    eyeSlashIcon.addEventListener('click', function() {
        passwordEntry.type = 'text';
        eyeIcon.style.display = 'inline';
        eyeSlashIcon.style.display = 'none';
    });
    
    // When the user clicks forgot password link
    forgotPassword.addEventListener('click', function() {
        loginForm.style.display = 'none';
        resetPasswordForm.style.display = 'flex';
        
    });

    //When submit button is clicked
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = usernameEntry.value.trim();
        const password = passwordEntry.value.trim();
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.some(user => user.username === username && user.password === password);

        if (userExists) {
            alert("Logged in successfully 🎉");
            window.location.href = 'quizdashboard.html';
        } else {
            alert("Invalid credentials!");
            isValid = false;
            usernameEntry.value = '';
            passwordEntry.value = '';
        }
    });
});
