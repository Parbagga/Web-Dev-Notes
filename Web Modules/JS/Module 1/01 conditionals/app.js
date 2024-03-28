// es5 6 7
document.write("hello<br>");
document.write("hello<br>");
document.write("<h2>hello</h2><br>");
document.write("i like javascript<br>");
document.write("i like javascript<br>");
document.write('ram said "i like javascript"<br>');
document.write('ram said "i don\'t  like javascript"<br>');

// variable
// variable declaration
// naming convention :
// no keywords  var document x
// no spaces var ab c x
// can not start with a num var 22cv x
// var name is also called identifier
// camel casing : var iLikeJavaScript
// kebab casing : i-like-js
// snake casing : i_like_js

var a;
//assign value to a var = assignment operator
a = 2;

//initiakizing a var
var b = 7;
var c = a + b;

console.log(c);

// conditionals
// < > <= >= ==(comparison) !=

var age = 17;
if (age < 17) {
  console.log("u can not vote");
} else if (age == 17) {
  console.log("next year");
} else {
  console.log("u can vote");
}

//=============================================

//compooound if
// email || phone && password
var username = "raj";
var password = 123;

if (username == "raj" && password == 123) {
  console.log("login successful");
} else {
  console.log("mismatch");
}

let isRaining = 1;

if (isRaining == true) {
  console.log("Stay inside the school");
} else {
  console.log("Go out and play");
}

///--------------------------

var age1 = 23;
var minage = 18;
var maxAge = 50;

if (age1 < minage) {
  console.log("too young for the job");
} else {
  if (age1 > maxAge) {
    console.log("too old for the job");
  } else {
    console.log("welcome");
  }
}

//----------------------------------------

//>>>>> Method 1
// if((salary>40000)&&(perForm>3)&&(status=="Full-time")&&(years>20)){
//     console.log('Bonus is 10000')
// }
// else if((salary>40000)&&(perForm>3)&&(status=="Full-time")){
//     console.log('Bonus is 8000')
// }
// else if((perForm>3)&&(status=="Full-time")){
//     console.log('Bonus is 5000')
// }
// else if((perForm>3)){
//     console.log('Bonus is 3000')
// }
//     else{
//     console.log('Sorry bonus is zero')
// }

//method 2<<<<<<<<<<<<<<<<<<<<

// if (salary >= 40000) {
//   if (perForm >= 3) {
//     if (status == "Full-time") {
//       if (years >= 20) {
//         console.log("Bonus is 10000");
//       } else {
//         console.log("Bonus is 8000");
//       }
//     }
//   }
// } else if (perForm >= 3) {
//   if (status == "Full-time") {
//     console.log("Bonus is 5000");
//   } else {
//     console.log("Bonus is 3000");
//   }
// } else {
//   console.log("Sorry bonus is zero");
// }

// >>>>>>>>>>>>method 3<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>

var salary = 70000;
var perForm = 4;
var status = "Full-time";
var years = 21;

if (salary >= 40000 && perForm >= 3 && status == "Full-time" && years >= 20) {
  console.log("Bonus is 10000");
} else {
  if (salary >= 40000 && perForm >= 3 && status == "Full-time") {
    console.log("Bonus is 8000");
  } else {
    if (perForm >= 3 && status == "Full-time") {
      console.log("Bonus is 5000");
    } else {
      if (perForm >= 3) {
        console.log("Bonus is 3000");
      } else {
        console.log("Bonus is Zero");
      }
    }
  }
}

//-----------------------------------------------

var marks = 99;

if (marks >= 81 && marks <= 100) {
  console.log("Grade A");
} else if (marks >= 71 && marks <= 80) {
  console.log("Grade B");
} else if (marks >= 61 && marks <= 70) {
  console.log("Grade C");
} else if (marks >= 51 && marks <= 60) {
  console.log("Grade D");
} else if (marks >= 34 && marks <= 50) {
  console.log("Grade E");
} else if (marks >= 0 && marks <= 33) {
  console.log("Grade F");
}

///_----------------------------------------------
