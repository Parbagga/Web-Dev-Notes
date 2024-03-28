// Switch

// const car = 'bmw';

// switch(car) {
//   case 'honda':
//     document.write('amaze<br>');
//     document.write('city<br>');
//     break
//   case 'hyunda1':
//     document.write('kona<br>');
//     document.write('tuscon<br>');
//     document.write('i20<br>');
//     break
//   case 'maruti':
//     document.write('alto<br>');
//     document.write('swift<br>');
//     document.write('celerio<br>');
//     break
//   default:
//     document.write('Not Available<br>');
// }

const color = 'red';
switch(color) {
  case 'red':
    console.log('color is red');
    break
  case 'blue':
    console.log('color is blue');
    break
    default:
      console.log('color is not red or blue');
    
}

switch(new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`today is ${day}`);

