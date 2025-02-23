//EasyHttp Library Ajax XHR
function EasyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
EasyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);//type url async

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      // console.log(self.http.responseText);
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };
  this.http.send();
};

// Make an HTTP POST Request
EasyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  //content type
  this.http.setRequestHeader("content-type", "application/json");
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };
  // from Js Object to JSON string
  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request
EasyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  //content type
  this.http.setRequestHeader("content-type", "application/json");
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };
  // from Js Object to JSON string
  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE Request
EasyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      //console.log(self.http.responseText);
      //responseText will be an empty object
      // callback(null, self.http.responseText);
      callback(null, "Post Deleted ");
    } else {
      callback("Error: " + self.http.status);
    }
  };
  this.http.send();
};

