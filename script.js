//Get elements
    const form =document.getElementById('form');
    const inputFirstName = document.getElementById('fname');
    const inputLastName = document.getElementById('lname');
    const inputMessage = document.getElementById('message');
    const spanFName = document.getElementById('span-first-name');
    const spanLName = document.getElementById('span-last-name');
    const submitButton = document.getElementById('submit-bt');
    const regexNumber = /[0-9]/g;
   


// Chage border and show span for first name input error
 function showErrorFName() {
    inputFirstName.style.border = '2px solid #FF3333';
    spanFName.style.display = 'block';
 }

// Revert the changes in border and span made by the first name input
  function removeErrorFName() {
    inputFirstName.style.border = '';
    spanEmail.style.display = 'none';
}

// Chage border and show span for last name input error
 function showErrorLName() {
    inputLastName.style.border = '2px solid #FF3333';
    spanLName.style.display = 'block';
 }

// Revert the changes in border and span made by the last name input error
  function removeErrorLName() {
    inputFirstName.style.border = '';
    spanEmail.style.display = 'none';
}

//check if first name input contains numbers
function validateFName() {
    
    const valueFName = inputFirstName.value;
    const foundFName = valueFName.match(regexNumber);

    if(foundFName) {
        showErrorFName();
    } else {
        removeErrorFName();
    }    
}

// check if last name input contains numbers
function validateLName() {

    const valueLName = inputLastName.value;
    const foundLName = valueLName.match(regexNumber);

    if(foundLName) {
        showErrorLName();
    } 
    else {
         removeErrorLName();
     }
}












