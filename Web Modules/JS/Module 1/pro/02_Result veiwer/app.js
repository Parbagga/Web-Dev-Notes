const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const rollNumber = document.querySelector(".rollNumber");
const english = document.querySelector(".english");
const hindi = document.querySelector(".hindi");
const math = document.querySelector(".math");
const science = document.querySelector(".science");
const sanskrit = document.querySelector(".sanskrit");
const socialScience = document.querySelector(".socialScience");
const arts = document.querySelector(".arts");

const message = document.querySelector(".message");
const rollNum = document.querySelector(".rollNum");
const total = document.querySelector(".total");
const percent1 = document.querySelector(".percent1");

const submit = document.querySelector("#submit");
const result = document.querySelector("#result");
const errorDisplay = document.querySelector("#error");

const firstDivision = document.querySelector(".first")
const secondDivision = document.querySelector(".second")
const thirdDivision = document.querySelector(".third")
const failDivision = document.querySelector(".fail")
const passDivision = document.querySelector(".pass")


let marks = 0;
let percent = 0;

// styling

message.style.textTransform = "uppercase";

submit.addEventListener("click", function () {
  
    if((firstName.value && lastName.value && rollNumber.value) == false){
        errorDisplay.style.display = "block";
    }else{
       resultCalc();
       messageDisplay();
    }
   
});

function totalMarks() {
  marks =
    Number(english.value) +
    Number(hindi.value) +
    Number(math.value) +
    Number(science.value) +
    Number(sanskrit.value) +
    Number(socialScience.value) +
    Number(arts.value);
}

function percentage() {
  percent = (100 * marks) / 700;
}

function resultCalc() {
  totalMarks();
  percentage();
  grader();
}

function grader(){
    if(marks<=420 && marks >=189){
        passDivision.style.display = "block"
    failDivision.style.display = "block";
    }else if(marks<=630 && marks>560 ){
     firstDivision.style.display = "block";
    }else if(marks<=560 && marks>490){
        secondDivision.style.display = "block";
    }else if(marks<=490 && marks>420){
        thirdDivision.style.display = "block";
    }else{
            failDivision.style.display = "block"
    }
    
}


function messageDisplay() {
  result.style.display = "block";
  message.textContent = firstName.value + " " + lastName.value;
  rollNum.textContent = rollNumber.value;

  total.textContent = marks;
  percent1.textContent = Math.round(percent);
}