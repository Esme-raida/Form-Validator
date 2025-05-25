Thanks for the correction! Here's the complete and corrected README.md for your Form Validator project, with login.html, signup.html, login.css, signup.css, login.js, signup.js, and a shared validators.js file used by both pages:


---

# Form Validator

A web-based form validation project with separate *Login* and *Signup* pages.
Both pages use a shared validators.js file that contains reusable validation functions for real-time input checking, where necessary.

## Features

- Separate pages for Login and Signup
- Shared validation logic across both pages
- Validates:
  - Required fields
  - Email format
  - Password strength
  - Password confirmation match
- Real-time validation feedback
- Clean and responsive UI

## Technologies

- HTML5  
- CSS3  
- JavaScript (ES6)

## Project Structure

form-validator/ ├── login.html ├── login.css ├── login.js ├── signup.html ├── signup.css ├── signup.js └── validators.js

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Esme-raida/Form-Validator.git
cd form-validator

2. Open in Browser

Open either HTML file directly in your browser:

open login.html
# or
open signup.html

Or use Live Server in VS Code for better experience.

How It Works

Login Page (login.html):

Validates email and password fields.

Uses functions from validators.js to check password requirements.
It also contains a reset page, to help reset password if forgotten.


Signup Page (signup.html):

Validates full name, email and password

Ensures strong passwords.

Utilizes shared validation functions from validators.js.


validators.js:

Contains reusable functions such as:

validateEmail()

validatePassword()

validateUsername()


Can be easily extended with more custom validators.



Customization

To extend or adjust validation rules:

Edit or add functions in validators.js

Modify feedback styles in login.css and signup.css


You can also add validations like:

Age/date of birth

Phone number format

If these inputs are added, Ofcourse


License

This project is licensed under the MIT License.


---

Author: Raeedah Musa
GitHub: https://github.com/Esme-raida

---
