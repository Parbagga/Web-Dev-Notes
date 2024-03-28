

const http = new EasyHTTP();

//GET posts
// const posts = http.get("https://jsonplaceholder.typicode.com/posts");

// console.log(posts);

// http.get("https://jsonplaceholder.typicode.com/posts", function (err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

//single post
// http.get("https://jsonplaceholder.typicode.com/posts/2", function (err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

//doesnt work because data is returned before it was added by server so add a callback in function arguments

const data = {
  title: " new post 5",
  body: "This is the new post",
};

// //Create post
// http.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   data,
//   function (err, res) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
//   }
// );

// //Update post
// http.put(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   data,
//   function (err, res) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
//   }
// );
http.delete("https://jsonplaceholder.typicode.com/posts/1",
 function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});