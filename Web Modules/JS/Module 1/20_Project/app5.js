

var image = document.getElementById('img')
var imageTracker = 't'

function change(){
    if(imageTracker == 't'){
        image.src="2.jpg"
        imageTracker='f'
    }else{
        image.src="1.jpg"
        imageTracker='t'
    }
}

var timer = setInterval("change()", 500)