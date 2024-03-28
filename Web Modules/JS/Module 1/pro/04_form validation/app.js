const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// functions
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getfieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function getfieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getfieldName(input)} must be atleast ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getfieldName(input)} must be atleast ${max} characters`
    );
  }
}

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  }
}

//event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 4, 16);
  checkLength(password, 6, 25);
  checkPasswordMatch(password, password2);
  checkEmail(email);
});

// if(username.value === ''){
//     showError(username,"Username is Required")
// }else{
//     showSuccess(username)
// }

// if(email.value === ''){
//     showError(email,"Email is Required")
// }else if(!isVAlidEmail(email.value)){
//     showError(email,"Email is not valid")
// }else{
//     showSuccess(email);
// }

// if(password.value === ''){
//     showError(password,"Password is Required")
// }else{
//     showSuccess(password);
// }
// if(password2.value === ''){
//     showError(password2,"confirm password is Required")
// }else{
//     showSuccess(password2);
// }
