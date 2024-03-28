//6 sq 6 olor
// event listener this active click
// win condition
// random win color
// random 6 colors

// var colors = [
//     'rgb(255, 0, 0)',
//     'rgb(255, 255, 0)',
//     'rgb(0, 255, 0)',
//     'rgb(0, 255, 255)',
//     'rgb(0, 0, 255)',
//     'rgb(255, 0, 255)',
// ]

var numSquares = 6
var colors = generateRandomColors(numSquares)
var squares = document.querySelectorAll('.square')
var pickedColor = pickColor()
var colorDisplay = document.getElementById('colorDisplay');
var h1 = document.querySelector('h1');
var messageDisplay = document.querySelector('#message');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode')

init();

function init(){
    setupModeButtons();
    // setupSquares();
    reset();
}


for(var i=0; i<squares.length;i++){
    squares[i].style.background = colors[i]
    colorDisplay.textContent = pickedColor;
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.background
        console.log(pickedColor,clickedColor)
        if(clickedColor === pickedColor){
            h1.style.background = clickedColor;
            changeColors(clickedColor);
            messageDisplay.textContent = "correct";
            resetButton.textContent = "Play again";
        }else{
            this.style.background = '#232323';
            messageDisplay.textContent = "Try Again"
        }

    })
}
resetButton.addEventListener("click", function(){
    reset();
});


function setupModeButtons(){
    for(var i = 0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: 
            numSquares = 6;
            reset();

        });
    }
}

function changeColors(color){
    for(var i=0; i<squares.length;i++){
        squares[i].style.background = color
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0 ; i<num;i++){
        arr.push(randomColor());
    }
    return arr
}

function randomColor(){
        //pick a red from 0 - 255
        var r = Math.floor(Math.random() * 256)
        //pick a green from 0 - 255
        var g = Math.floor(Math.random() * 256)
        //pick a blue from 0 - 255
        var b = Math.floor(Math.random() * 256)
        return "rgb("+r+", "+g+", "+b+")"
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to matched picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    h1.style.background = "steelblue";
    messageDisplay.textContent= "";
    for(var i = 0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.background = colors[i];

        }else{
            squares[i].style.display = 'none';
        }
     }
}