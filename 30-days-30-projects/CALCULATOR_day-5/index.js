const inputBox = document.querySelector("#inputBox");
const buttons = document.querySelectorAll("button");

let string = "";
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      inputBox.value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      inputBox.value = string;
    }else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        inputBox.value =  string;
    }
  });
});
