//if statement

const id = 100;

//equal

if (id == 100) {
  console.log("correct");
} else {
  console.log("incorrect");
}

if (id != 99) {
  console.log("correct");
} else {
  console.log("incorrect");
}

//equal to value and type

const id2 = "100";

if (id2 === 100) {
  console.log("correct");
} else {
  console.log("incorrect");
}

const id3 = 100;

if (id3) {
  console.log(`the id is ${id3}`);
} else {
  console.log("no id defined");
}

if (typeof id4 !== "undefined") {
  console.log(`the id is ${id3}`);
} else {
  console.log("no id defined");
}

const color = "grey";

if (color === "red") {
  console.log("color is red");
} else if (color === "blue") {
  console.log("color is blue");
} else {
  console.log("the color is not red and blue");
}

//logical operators

const name = "raj";
const age = 5;

if (age >= 0 && age < 20) {
  console.log(`${name} is teenager`);
} else if (age >= 13 && age <= 19) {
  console.log(`${nsme} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

//ternary operators

console.log(id === 100 ? "correct" : "incorrect");
