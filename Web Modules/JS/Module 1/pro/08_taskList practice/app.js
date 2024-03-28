  const task = document.querySelector('#task');
  const addTask = document.querySelector('#addTask');
  const collection = document.querySelector('.collection')



//add event listner
  addTask.addEventListener('click',updateTask)
  collection.addEventListener('click',removeTask)


// create
  function updateTask(e){

    if(task.value ===""){
        alert('please add task');
    }else{

    const li = document.createElement('li');
    li.className = 'collection-item';
     
    li.appendChild(document.createTextNode(task.value));

    const link = document.createElement('a')
    link.className = 'delete-task'
    link.appendChild(document.createTextNode('X'))
    
    li.appendChild(link);
     
    collection.appendChild(li);
     
    task.value = "";

    }
  }


  //delete
  function removeTask(e){
    if(e.target.parentElement.classList.contains = 'delete-task'){
        e.target.parentElement.remove();
    }
      
  }




