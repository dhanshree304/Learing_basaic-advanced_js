const getColour = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);//hexadecimal to the base 16 me convert ho rgha hai for colour code
   // console.log(randomNumber,randomCode);
   document.body.style.backgroundColor = randomCode;
}

document.getElementById("btn").addEventListener(
    "click",getColour
)
getColour();