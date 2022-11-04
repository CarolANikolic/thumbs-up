//Get elements
const form =document.getElementById('form');
const inputFirstName = document.getElementById('fname');
const inputLastName = document.getElementById('lname');
const inputMessage = document.getElementById('message');
const spanFName = document.getElementById('span-first-name');
const spanLName = document.getElementById('span-last-name');
const inputEmail = document.getElementById('email');
const spanEmail = document.getElementById('span-email');
const submitButton = document.getElementById('submit-bt');
const regexNumber = /[0-9]/g;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//test
const valueFName = inputFirstName.value;
const foundFName = valueFName.match(regexNumber);
const valueLName = inputLastName.value;
const foundLName = valueLName.match(regexNumber);
const email = inputEmail.value;
const foundMatch = email.match(regexEmail)

//Disable and enable button
function disableButton() {
    submitButton.disabled = true;
}

function enableButton() {
    submitButton.disabled = false;
}


// First name validation
// Change border and show span for first name input error
function showErrorFName() {
inputFirstName.style.border = '2px solid #FF3333';
spanFName.style.display = 'block';
}

// Revert the changes in border and span made by the first name input
function removeErrorFName() {
inputFirstName.style.border = '';
spanFName.style.display = 'none';
}

// Check if first name input contains numbers
function validateFName() {

const valueFName = inputFirstName.value;
const foundFName = valueFName.match(regexNumber);


    if(foundFName) {
        showErrorFName();
        disableButton();
} else {
        removeErrorFName();
        enableButton();
}

} 


// Last name validation
// Chage border and show span for last name input error
function showErrorLName() {
inputLastName.style.border = '2px solid #FF3333';
spanLName.style.display = 'block';
}

// Revert the changes in border and span made by the last name input error
function removeErrorLName() {
inputLastName.style.border = '';
spanLName.style.display = 'none';
}

// Check if last name input contains numbers
function validateLName() {

const valueLName = inputLastName.value;
const foundLName = valueLName.match(regexNumber);

if(foundLName) {
    showErrorLName();
    disableButton();
} 
else {
     removeErrorLName();
     enableButton();
 }
}


//Email validation
// Chage border and show span for email name input error
function showErrorEmail() {
inputEmail.style.border = '2px solid #FF3333';
spanEmail.style.display = 'block';
}

// Revert the changes in border and span made by the email input error
function removeEmailError() {
inputEmail.style.border = '';
spanEmail.style.display = 'none';
}

// Validate email input format
function validateEmail() {

const email = inputEmail.value;
const foudMatch = email.match(regexEmail);

if(foudMatch) {
    removeEmailError();
    enableButton();
} else {
    showErrorEmail();
    disableButton();
}
}

