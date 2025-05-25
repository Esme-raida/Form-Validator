export function validateUsername (nameInput, usernameError) {
    let isValid = true;
    usernameError.textContent = '';
    //To check for length, musn't be less tahn 4 or greater tahn 8
    const nameLength = nameInput.value.length;
    if (nameLength < 4) {
        usernameError.textContent = 'Username must be greater than 4';
    isValid = false;
    } else if (nameLength > 8) {
        usernameError.textContent = 'Username cannot be greater than 8';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    //To check for unwanted symbols
    if(!/^[a-zA-Z0-9]+$/.test(nameInput.value)) {
            usernameError.textContent = 'Username cannot contain special characters or space';
            isValid = false;
        }

    return isValid;
}



export function validateEmail(emailInput, emailError) {
    let isValid = true;
    emailError.textContent = '';
    
    //To format email-remove spaces and convert to lowercase
    const formattedEmail = emailInput.value.trim().toLowerCase();

    //REPLACED WITH REGEX BELOW
    // //To check if @ and . exist the email entered
    // if (!formattedEmail.includes('@') && !formattedEmail.includes('.')) {
    //     emailError.textContent = "Email must contain '@' and '.'"
    //     isValid = false;       
    // };
    
    // //To help check positions of @ and .
    // if (formattedEmail[0] === '@' || formattedEmail[0] === '.') { //To check if the @ or . starts the email
    //     emailError.textContent = 'Invalid email structure';
    //     isValid = false;
    // } else if (formattedEmail[formattedEmail.length - 1] === '@' || formattedEmail[formattedEmail.length - 1] === '.' )  {
    //     emailError.textContent = 'Invalid email structure';
    //     isValid = false;        
    // }
    
    // //To check if there is a dot[.] after the @ and if a dot exists
    // const atSymbolIndex = formattedEmail.indexOf('@');
    // const dotSymbolIndex = formattedEmail.lastIndexOf('.') //Using last because several dots may be used in the real world
    
    // if (dotSymbolIndex <  atSymbolIndex /*If dot comes before at*/ || dotSymbolIndex === -1 /* To check if dot does not exist*/) {
    //     emailError.textContent = 'Dot must come after @';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ //Basic email structure
    if(!emailRegex.test(formattedEmail)) {
        emailError.textContent = 'Invalid email structure';
        isValid = false;
    }

    return isValid;

}    
        
        

export function validatePassword (passwordInput, passwordError, unwantedSymbols) {
    let isValid = true;
    passwordError.textContent = '';
    const passwordLength = passwordInput.value.length;

    //Variables containing regular expressions and test to check
    const hasLetter = /[a-zA-Z]/.test(passwordInput.value); //Using something called regular expression
    const hasNumber = /[0-9]/.test(passwordInput.value);
    const hasSymbol = /[^a-zA-Z0-9]/.test(passwordInput.value);

//Password must be at least 6 letters
    if(passwordLength < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;        
    } else if(!(hasLetter && hasNumber)) { //Password must have a letter or a symbol and no space
            passwordError.textContent = 'Password must contain at least one letter and one number';
            isValid = false;
    } else if(!hasSymbol) {
            passwordError.textContent = 'Password must contain a symbol';
            isValid = false;                
    } else if(passwordInput.value.includes(' ')) {
            passwordError.textContent = 'Password cannot contain spaces';
            isValid = false;
    }
    return isValid;
}
