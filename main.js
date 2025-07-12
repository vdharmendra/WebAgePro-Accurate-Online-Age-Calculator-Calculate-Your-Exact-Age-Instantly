const calcBtn = document.getElementById("calculate-age-btn");
const birthdayInput = document.getElementById("birthday-input");
const calcOutput = document.getElementById("output");

function calculateAge() {
  const birthdayValue = birthdayInput.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const ageResult = getAge(birthdayValue);
    calcOutput.innerText = `Your age is ${ageResult} ${ageResult > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let ageResult = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if ( month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
    ageResult--;
  }

  return ageResult;
}

calcBtn.addEventListener("click", calculateAge);