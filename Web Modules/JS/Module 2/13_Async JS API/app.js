document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  // const number = document.querySelector('input[type="number"]').value;

  //console.log(number);
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.chucknorris.io/jokes/random`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
 

      let output = "";

      if (this.status == 200 && this.readyState== 4) {
        output += `<li>${response.value}</li>`;

      } else {
        output += "<li>Something is wrong</li>";
      }

      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
}
