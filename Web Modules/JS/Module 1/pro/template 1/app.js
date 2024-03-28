const dropDown = document.querySelector("#option");
const dropDown2 = document.querySelector("#option2");

let data = [
  {
    country: "India",
    cities: ["Mumbai", "Delhi"],
  },
  {
    country: "Pakistan",
    cities: ["Lahore", "Karachi"],
  },
];

function display(e) {

   
  

  let newData = e.forEach((element) => {
    let item = element.country;
    let item2 = element.cities;
     
    let cities = item2.map((item)=>{
             
        console.log(item.length)
    });
      
     dropDown.innerHTML += `<option value="volvo">${item}</option>`;
  });
}

display(data);
