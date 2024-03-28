let val;

// number to a string

val = String(55); //val=5
val = String(4 + 4);

// bool to String

val = String(true);

// Date to String
val = String(new Date());

// array to String
val = String([1, 2, 3, 4, 5]);

// toString();/////////


val = (5).toString();
val = true.toString();


// Sgtring t Numbers//

val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello"); ////gives value Nan (not a Number)

val = Number([1, 2, 3]);
val = Number("100");
val = Number("11.56");

console.log(val);
console.log(typeof val);
console.log(val.toFixed()); //percesion //2 with parse float

const val1 = String(5);
const val2 = 6;

const sum = val1 + val2; //string and number //type Conversion // Number(val1+v1l2)

console.log(sum);
console.log(typeof sum);


