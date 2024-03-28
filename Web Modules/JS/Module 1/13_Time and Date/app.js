let val;

const today = new Date();
val = today;

let birthday = new Date("9-10-1998 11:22:00");

console.log(birthday);

birthday = new Date("September 10 1981");
console.log(birthday);

birthday = new Date("9/11/1981");
console.log(birthday);

val = today.getMonth(); // jan = 0 , feb = 1, mar = 2
val = today.getDate();
val = today.getDay();
val = today.getMonth();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getMonth();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //total seconds since 1st jan

birthday.setMonth(2);
birthday.setDate(11);
birthday.setFullYear(1990);
birthday.setHours(3);
birthday.setMinutes(32);
birthday.setSeconds(10);

console.log(val);
console.log(birthday);
val = birthday;
console.log(val);
