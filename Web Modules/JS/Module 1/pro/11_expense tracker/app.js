const balance = document.querySelector("#balance");
const money_plus = document.querySelector("#money-plus");
const money_minus = document.querySelector("#money-minus");
const list = document.querySelector("#list");
const sumbit = document.querySelector("#form");
const text = document.querySelector("#text");
const amount = document.querySelector("#amount");

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

//event Listener
sumbit.addEventListener("submit", addTransaction);

init();

//dummy Transactions
const dummyTransactions = [
  { id: 1, text: "Book", amount: -30 },
  { id: 2, text: "Keyboard", amount: 300 },
  { id: 3, text: "Mouse", amount: -10 },
  { id: 4, text: "Camera", amount: -50 },
  { id: 5, text: "Salary", amount: 150 },
];

// //generate ID
// function generateID(){
//      return Math.floor(Math.random()*1000000)
// }

// //generate ID using iteration
function generateIDS() {
  let id = transactions.length;
  id++;
  //   console.log(id);
  return id;
}

// console.log(transactions);

// console.log(Array.isArray(transactions)); //  ??????????????????

//function to Create transactions to DOM
function addTransactionDOM(transaction) {
  // get sign
  let sign = amount.value > 0 ? "+" : "-";
  const item = document.createElement("li");

  item.className = transaction.amount > 0 ? "plus" : "minus";

  item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span>
      <button class="delete-btn" onclick="removeTransaction(${
        transaction.id
      })">x</button> `;

  list.appendChild(item);
}

// function to add transaction while clicking add button
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please add Text and Amount ");
  } else {
    const transaction = {
      id: generateIDS(),
      text: text.value,
      amount: +amount.value,
    };

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateLocalStorage();
    updateValues();
    text.value = "";
    amount.value = "";
  }
}

///update the  balance income and expense
function updateValues() {
  const amount = transactions.map((transaction) => transaction.amount);
  //   console.log(amount);
  const total = amount.reduce((acc, curr) => acc + curr, 0);
  //   console.log(total);
  const income = amount
    .filter((transaction) => transaction > 0)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  //   console.log(income);

  const expense = amount
    .filter((transaction) => transaction < 0)
    .reduce((acc, curr) => acc + curr * -1, 0)
    .toFixed(2);

  //   console.log(expense);

  balance.innerText = `$${total}`;
  money_minus.innerText = `$${expense}`;
  money_plus.innerText = `$${income}`;
}

//remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  updateLocalStorage();
  init();

  console.log(transactions);
}

//update Local storage
function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function init() {
  list.innerHTML = "";
  transactions.forEach(addTransactionDOM);
  updateValues();
}
