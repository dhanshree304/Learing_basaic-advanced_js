let userInput = document.getElementById("date");
// userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let today = new Date();

  const milliSeconds = today - birthDate;
  const ageDate = new Date(milliSeconds);
  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  let bag= "";

  if (years > 0) {
    bag += years;
    if (years === 1) {
      bag += "year" + " ";
    } else {
      bag += "years" + " ";
    }
  }

  // if(years>0){
  //   bag+=`${years} ${years===1 ? "year" : "years"} `
  // }



  if (months > 0) {
    bag += months;
    if (months === 1) {
      bag += "month" + " ";
    } else {
      bag += "months" + " ";
    }
  }

  // if(months>0){
  //   bag+=`${months} ${months===1 ? "month" : "months"} `
  // }

  if (days > 0) {
    bag += days;
    if (days === 1) {
      bag += "day" + " ";
    } else {
      bag += "days" + " ";
    }
  }

  // if(days>0){
  //   bag+=`${days} ${days===1 ? "day" : "days"} `
  // }



  result.innerHTML = `You are age is : ${bag}`;
  
}

