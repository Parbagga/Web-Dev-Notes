const name = "ashish";
const age = 30;
const job = "Web developer";
const city = "kullu";

let html1,html2;

//when we insert HTML from JS and fetch data from Ajax and it is dynamic UL or Table
//without template strings

html1 =
  "<ul><li> Name: " +
  name +
  "</li><li>Age:" +
  age +
  "</li><li>Job:" +
  job +
  "</li><li>city:" +
  city +
  "</li></ul>";
document.body.innerHTML = html1;
console.log(html1)

function hello() {
  return "hello";
}

html2 = 
`<ul>
<li>Name:${name}</li>
<li>Age:${age}</li>
<li>Job:${job}</li>
<li>city:${city}</li>
<li>:${2 + 3}</li>
<li>:${hello}</li>
<li>:${age > 30 ? "over 30" : "under 30"}</li>
</ul>
`;
document.body.innerHTML = html2;
