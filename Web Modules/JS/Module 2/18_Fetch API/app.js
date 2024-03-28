
//Fetch API

document.getElementById("button1").addEventListener('click', getText); 
document.getElementById("button2").addEventListener('click', getJson); 
document.getElementById("button3").addEventListener('click', getApi);

function getText(){
fetch('dataa.txt')
.then(function(response) {
    //console.log(response.text());
    //gives out promise which responds through a .then
    return response.text();//promise continued with then
})
.then(function(data) {
    //console.log(data);
    document.getElementById('output').innerHTML = data;
})
.catch(function(err){
    console.log(err)
    // document.getElementById('output').innerHTML = err;
})
}


function getJson(){
fetch('post.json')
.then(function(response) {
    // console.log(response.text());//gives out promise which responds through a .then. 
    return response.json();//promise continued with then
})
.then(function(data) {
    console.log(data); 
    let output = "";
    data.forEach(function(posts) {
    output += `<li>${posts.body}</li>`
})
document.getElementById('output').innerHTML = output;
})
.catch(function(err) {
    console.log(err)
    // document.getElementById('output').innerHTML = err;
})
}

function getApi() {
fetch('https://api.github.com/users')
.then(function(response) {
    // console.log(response.text());
    //gives out promise which responds through a .then 
    return response.json();//promise continued with then
})
.then(function(data) {
    console.log(data);
    let output = '';
    data. forEach(function(posts) {
        output +=`<li>${posts. login}</li>`
    });
    document.getElementById('output').innerHTML = output;
})
.catch(function(err) {
console.log(err)
// document.getElementById('output').innerHTML = err;
})
}
