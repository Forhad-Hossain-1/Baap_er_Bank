// step 1: submit button click of event handler

document.getElementById('btn-submit').addEventListener('click', function(){

// step 2: get the email address from email field
// always remember to use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;

// step 3: get password
// 3.a: set id on the html element
// 3.b: set the element
// 3.c: get the value from the element
const passwordField = document.getElementById('password');
const password = passwordField.value;

// danger: do not verify email password on the client side
// step 4: verify email and password
if(email === 'sontan@baap.com' && password === 'secret'){
    window.location.href = 'bank.html';
}else{
    alert('You are shown wrong user');
}

})