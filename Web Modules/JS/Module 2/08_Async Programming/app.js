// what is async programming)
// sync code

posts = loadPosts();

//wait till the posts are fetched //do something with the posts
doTheNextThing();

// async code
LoadPostsAsync(function () {
  //wait to get the posts
  //do somethisg with the posts
});
doTheNextThing();

//most async code you work with will be part of api or library
//XMLHttpRequest & Fetch
//jQuery Ajax, Axios, other HTTP Library
//Node.js File system module

//ways to handle async code
//callbacks
//Promises
//async await.

// what is Ajax?)
//Asynchronous javascrpt and xml
// set of web technologies
// send and receive data asynchronously
// does not interfere with the current page
// JSON has replaced XML for most of its part

//Client sends a JS call to the server using AJAX engine which uses the
// object or XHR object which is a part of the browser.
// The server responds and returns the data in usually JSON format but
//can also be in xml or plain text. the we parse and use that data in our
//application via HTML response. all this is done behind the seens
// any page referesh.
//we can send and receive requests on our local machine or local server, public API, These API have to be granted some permissions to be able to use them.
//these api's generally have cors enabled. Cross-Origin Resource Sharing (CORS) is an HTTP- header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading of resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross- origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
//some API's require some authentication OAuth is one of it.

//XmlHttpRequest (XHR) Object core tech in ajax all browsers have this api
// API in the form of an object
// provided by the browsers JS environment
// Methods transfer data between client /server
//can be used with other protocols than HTTP
// can work with data other than XML (JSON, plain text)

//other libraries or methods used to make HTTP requests
//Ajax XHR (old tech)
// Fetch API part of browser (preferred as it is a part of vanilla js).

//external libraries
// Axios
// Superagent
//jQuery - DOM manipulation library
//Node HTTP for node.js
