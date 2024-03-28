//Promises ES6
// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
//Promises are the alternatives of callbacks or an alternative way to handle async operations. They are called promises because while they are handling async operations they can promise to do something when the ope artion is finished. We handle a promise response with a .then
// The methods promise. then), promise.catch(), and promise. finally() are used to associate further action with a promise that becomes settled.

const posts = [
  { title: "Post One", body: "This is the post one" },
  { title: "Post Two", body: "This is the post two" },
];

function createPost(post) {
  //Promise takes a parameter which is a function with 2 arguments resolve and reject. Resolve is done when we are done with the action and reject when there is certain error
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      const error = true; //false
      if (!error) {
        resolve();
      } else {
      }
      reject("Error: Something went wrong");
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "this is the post three" })
  .then(getPosts)
  .catch(function (error) {
    console.log(error);
  });

//fetch API is the new standard to make HTTP requests other than AJAX and XHR and fetch returns a promise.
