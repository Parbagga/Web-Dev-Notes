document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  //create an XHR object instance
  const xhr = new XMLHttpRequest();

  //open method
  xhr.open("GET", "data.txt", true); //(type of request | url | async= true)
  console.log('readystate', xhr.readyState)
  
  // optional for loaders
  xhr.onprogress = function () {
    console.log("readystate", xhr.readyState);
  };

  xhr.onload = function () {
    console.log("readystate", xhr.readyState);
    if (this.status === 200) {
      console.log(this.responseText)
      document.getElementById("output").innerHTML = `
                  <h1>${this.responseText}</h1>
                  `;
    }
  };

  // //when onload loads we are at step 4. onload is new earlier we used xhe.onreadystatechange to check if we are at step 4
  // //we can access the state we are at by calling xhr.readyState
  // xhr.onreadystatechange = function(){
  // console.log('readystate', xhr.readyState)
  // if(this.status == 200 && this.readyState== 4) {
  //     console.log(this.responseText);
  // }
  // }

  //optional for errors
  // xhr.onerror = function () {
  //   console.log("error");
  // };

  
  xhr.send();
}

//HTTP status
//200: ok
//403: forbidden
//404: "not found"

// readyState values
//8 request not initialized
//1 server connection established
//2 request received
//3 processing request
//4 request finished and response is ready
