

// var image = document.getElementById("box2")


// // function change(){
// //     image.src="2.jpg"
// // }

//   var imageToggler = 'r'
// function change(){
//     if(imageToggler == 'r'){
//         image.src = '2.jpg';
//         imageToggler = 'e';
//     }else{
        
//         image.src = '1.jpg';
//         imageToggler = 'r';
//     }
    
// }

// // setTimeout('change()',3000);


// setInterval('change()', 2000);





// let body = document.querySelector('body');
// let h1 = document.querySelector('h1')
// let btn = document.querySelector('.btn')
// let theme = 'white'
// function change(){
    
//     if(theme == 'white'){
//         body.style.background = 'black';
//         h1.className = 'dark';
//         btn.classList.add('dark')
//         theme = 'black';
//     }else{
//         body.style.background = 'white';
//         h1.className = 'light';
//         btn.classList.remove('dark')
//         theme = 'white';
//     }
    
// }



let container = document.querySelector('.container');
let ul = document.createElement('ul');
container.appendChild(ul);
ul.className = 'list'




function addTask(){
    const li = document.createElement('li');
    li.className = 'del';
    ul.appendChild(li);
    li.appendChild(document.createTextNode('Hello'));
}


let deleteItem = document.querySelector('.list')

console.log(deleteItem)
    deleteItem.addEventListener("click", del)
     
    function del(e){
        if(e.target.parentElement === 'list'){
            console.log('delete');
        }
    }











