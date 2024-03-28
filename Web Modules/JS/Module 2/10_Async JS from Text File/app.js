const btn = document.getElementById("button");

btn.addEventListener("click", loadData);

function loadData() {
  //create an XHR object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "data.txt", true); //true = async

  //console.log('READYSTATE', xhr.readyState);

  // optional - use of spinners/loaders
  xhr.onprogress = function () {
    console.log("READYSTATE", xhr.readyState);
  };

  // onload
  xhr.onload = function () {
    if (this.status == 200) {
      //console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>$(this.responseText)</h1>`;
    }
  };

  // xhr.onreadystatechange = function () {
  //     console.log('READYSTATE', xhr.readyState);
  // if (this.status === 200 && this.readyState== 4) {
  //     console.log(this.responseText);
  // }
  // }

  // send
  xhr.send();
}

// HTTP STATUS
// 200: 'OK'
// 403: 'Forbidden'
// 464: "NOT FOUND"

//readyState values
//0: request is initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready)
