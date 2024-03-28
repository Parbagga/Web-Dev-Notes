
//A callback is a function passed  as a parameter to another function and is executed in function body,
//callbacks can be synchronous or asynchronous previously used callback foreach on an array that passes 
//a function which is a callback and not asynchronous.

// another callback example is setTimeout async 

const posts = [    
   {title: 'Post One', body: 'This is the post one'},
   {title: 'Post Two', body: 'This is the post two'}
];
// function createPost(post){
//     setTimeout (function(){ posts.push(post)
//     },2000)
// }

// function getPosts(){
//     setTimeout(function(){ 
//         let output = '';
// posts.forEach(function(post){
// output += `<li>${post.title}</li>`
// });
// document.body.innerHTML = output;
// }, 1000);
// }

// createPost({title: 'Post Three', body: 'this is the post three'})
// getPosts();

function createPost(post, callback) {
setTimeout(function(){
posts.push(post)
callback();
},2000)
}

function getPosts(){
setTimeout(function(){
let output='';
posts.forEach(function(post){
output += `<li>${post.title}</li>`
});
document.body.innerHTML = output;
}, 1000);
}

createPost({title: 'Post Three', body: 'this is the post three'}, getPosts);