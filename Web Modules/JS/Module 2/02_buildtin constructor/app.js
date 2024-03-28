// lastly we looked at constructor functions and this keyword which
// referred to builtin constructors. Other core objects have constructors
// as well but they are not advisable to use for instancse primitive type
//   like strings numbers bool can be created as objects just because
// it slows down execution speed

// Strings
const name1 = "Ashish";
const name2 = new String("Ashish");
//we can add properties to this object
// name 2. age = 23;11112

console.log(name1);
console.log(name2);
console.log(typeof name1);
console.log(typeof name2);

if (name1 === "Ashish") {
  console.log("yes");
} else {
  console.log("no");
}
if (name2 === "Ashish") {
  console.log("yes");
} else {
  console.log("no");
}

// number
const num1 = 5;
const num2 = new Number(5);
console.log(typeof num1);
console.log(typeof num2);

// bool
const booll = true;
const bool2 = new Boolean(true);

//functions
const getSum1 = function (x, y) {
  return x + y;
};
const getSum2 = new Function("x", "y", "return 1+1");
console.log(getSum1(2, 3));
console.log(getSum2());

// objects
const person = { name: "Ashish" };
const person2 = new Object({ name: " Singh" });
console.log(person2);

//arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr1);

// reg exp
const rel = /\w+/;
const re2 = new RegExp("w+");
console.log(re1);
