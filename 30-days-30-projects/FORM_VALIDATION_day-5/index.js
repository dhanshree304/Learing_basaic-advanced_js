var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

let flag = 1;
function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    nameError.style.display="block";
    flag = 0;
  } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
    nameError.innerHTML = "write full name";
    nameError.style.display="block";
    flag = 0;
  } else {
    nameError.innerHTML = "valid";
    nameError.style.display="block";
    nameError.style.color="green"
    flag = 1;
  }
  console.log("abcd");
}

function validatePhone() {
  var phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no is required";
    phoneError.style.display="block"
    flag = 0;
  } else if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    phoneError.style.display="block"
    flag = 0;
  } else if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "only digits";
    phoneError.style.display="block"
    flag = 0;
  } else {
    phoneError.innerHTML = "valid";
    phoneError.style.color="green";
    flag = 1;
  }
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    emailError.style.display="block";
    flag = 0;
  } else if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    emailError.style.display="block"
    flag = 0;
  } else {
    emailError.innerHTML = "valid";
    emailError.style.color="green";
    flag = 1;
  }
}

function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + "more charcters required";
    messageError.style.display="block";
    flag = 0;
  }

  messageError.innerHTML = "valid";
  messageError.style.display="block";
  messageError.style.color="green";
  flag = 1;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "please fix error";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    flag = 0;
  }
  
if (flag) {
  return true;
} else {
  return false;
}

}