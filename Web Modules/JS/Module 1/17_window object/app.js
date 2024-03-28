// //window methods /objects /properties

// //alert // 

// window.alert('helo');

// //prompt //
// const input = prompt();
// alert(input);

// //confirm//

// if (confirm('are you sure')){
//     console.log('yes');
// }else{
//     console.log('no');
// }

let val;

//outer height and width
val = window.outerHeight;
val = window.outerWidth;

//outer height and width

val = window.innerHeight;
val = window.innerWidth;

//scroll points 

val = window.scrollY;
val = window.scrollX;

//location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;//url add ? id = 2
//redirect 

// window.location.href =' http://www.google.com'//;

//reload
// widow.location.reload();

// window.history.go(-1);//goes to previous site visited // -2 -3 -4 relatively


val = window.history.length;// no. of previous sites in one session

//navigator objects

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;//version of 
val = window.navigator.userAgent;
val = window.navigator.language;
val = window.navigator.platform;
console.log(val);
val = window.navigator.vendor;
