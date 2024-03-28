const wordEl = document.querySelector("#word");
const platAGainBtn = document.querySelector("#play-button");
const wrongLettersEl = document.querySelector("#wrong-letters");
const popup = document.querySelector("#popup-container");
const notification = document.querySelector("#notification-container");
const finalMessge = document.querySelector("#final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

const correctLetters = [];
const wrongLetters = [];






// //show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")//split is a  string method func which converts str into array
      .map(
        (letter) => `
           <span class ="letter">
              ${correctLetters.includes(letter) ? letter : ""}
           </span>
        `
      )
      .join("")}`;
      const innerWord = wordEl.innerText.replace(/\n/g,'');
      console.log(innerWord)
      if(innerWord === selectedWord){
        finalMessge.innerText = 'congratulations! You won '
        popup.style.display = 'flex';
      }
}

// Update Wrong Letters EL
function UpdateWrongLettersEl(){
  // Display Wrong Letters
  wrongLettersEl.innerHTML = `
   ${wrongLetters.length > 0 ? `<p>Wrong</p>` : ''}
   ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

  // Display Parts 
  figureParts.forEach((part,index)=>{
    
    const errors = wrongLetters.length;
    if(index < errors){
      part.style.display = 'block';
    }else{
      part.style.display = 'none';
    }
  });


  // check if lost
  if(wrongLetters.length === figureParts.length){
    finalMessge.innerText = 'Unfortunately ! You Lost'
    popup.style.display = 'flex';
  }


}


function showNotification (){
  notification.classList.add('show');

  setTimeout(()=>{
    notification.classList.remove('show')
  },2000);
}


// keydown letter press 
window.addEventListener('keydown', e => {
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);

                displayWord();
            }else{
              showNotification();
            }
        }else{
          if(!wrongLetters.includes(letter)){
            wrongLetters.push(letter);
            UpdateWrongLettersEl();
          }else{
            showNotification();
          }
        }
           

    } 
})



//play again button
platAGainBtn.addEventListener('click', ()=>{
  //empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);
  
  selectedWord = words[Math.floor(Math.random() * words.length)];
  
  displayWord();

  UpdateWrongLettersEl();

  popup.style.display = 'none';


})


console.log(figureParts.length)










