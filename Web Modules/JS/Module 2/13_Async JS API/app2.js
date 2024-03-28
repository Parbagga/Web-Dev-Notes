document.querySelector(".get-jokes").addEventListener("click", getJokes);

const data = null;

const data2 = document.querySelector("#city");


function getJokes(e) {
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.open("GET", `https://open-weather13.p.rapidapi.com/city/${data2.value}`, true);
  xhr.setRequestHeader(
    "X-RapidAPI-Key",
    "25e0a6ebd6mshbb08fd6fdbee2adp123488jsn5a3f86645a34"
  );
  xhr.setRequestHeader("X-RapidAPI-Host", "open-weather13.p.rapidapi.com");

  xhr.onload = function () {
    if (this.readyState === this.DONE) {
		const response = JSON.parse(this.responseText);
		console.log(response)
 
		document.querySelector(".jokes").textContent = JSON.stringify(response.main.temp);
		
    }
  
  };


  xhr.send(data);
}


