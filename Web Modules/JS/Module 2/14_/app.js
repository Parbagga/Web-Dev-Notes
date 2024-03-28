const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState == this.DONE) {
    console.log(this.responseText);

    const response = JSON.parse(this.responseText);
    console.log(response);

    let output = "";

    response.data.covid19Stats.forEach(function (joke) {
      console.log(joke);
      output + `<li>${joke.country}</li>`;
    });
    document.querySelector(".jokes").innerHTML = output;
  }
});

xhr.open(
  "GET",
  "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats? country-Canada"
);
xhr.setRequestHeader(
  "x-rapidapi-key",
  "f53a56d393 msh8a9753afe918e4fpidfac0j sna79c367 dada"
);
xhr.setRequestHeader(
  "x-rapidapi-host",
  "covid-19-coronavirus-statistics.p.rapidapi.com"
);

xhr.send(data);
