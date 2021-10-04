let itemTotal = document.getElementById("itemTotal").value;
console.log(itemTotal);

var cashRegisterTotal = document.getElementById("cashRegisterTotal");
cashRegisterTotal.innerHTML = 0;


//Currency

var pennyTotal = 0;
var nickelTotal = 0;
var dimeTotal = 0;
var quarterTotal = 0;
var oneDollarTotal = 0;
let fiveDollarTotal = 0;
let tenDollarTotal = 0;
let twentyDollarTotal = 0;
let oneHundredDollarTotal = 0;

let cashRegisterTotalAmount = 0;
console.log("cashRegisterTotalAmount: " + cashRegisterTotalAmount);


// Penny
console.log(pennyTotal)

let pennyTotalLabel = document.getElementById("pennyTotalLabel");
pennyTotalLabel.innerHTML = pennyTotal;

let pennyTotalUp = document.getElementById("pennyTotalUp");
let pennyTotalDown = document.getElementById("pennyTotalDown");

pennyTotalUp.addEventListener("click", function() {
  pennyTotal = (parseFloat(pennyTotal) + .01).toFixed(2);
  console.log(pennyTotal);
  pennyTotalLabel.innerHTML = pennyTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + .01).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

pennyTotalDown.addEventListener("click", function() {
  if (pennyTotal <= 0) {
    return;
  }
  pennyTotal = (parseFloat(pennyTotal) - .01).toFixed(2);
  console.log(pennyTotal)
  pennyTotalLabel.innerHTML = pennyTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + .01).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// Nickel
nickelTotal = 0;
console.log(nickelTotal)

let nickelTotalLabel = document.getElementById("nickelTotalLabel");
nickelTotalLabel.innerHTML = nickelTotal;

let nickelTotalUp = document.getElementById("nickelTotalUp");
let nickelTotalDown = document.getElementById("nickelTotalDown");

nickelTotalUp.addEventListener("click", function() {
  nickelTotal = (parseFloat(nickelTotal) + .05).toFixed(2);
  console.log(nickelTotal);
  nickelTotalLabel.innerHTML = nickelTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + .05).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

nickelTotalDown.addEventListener("click", function() {
  if (nickelTotal <= 0) {
    return;
  }
  nickelTotal = (parseFloat(nickelTotal) - .05).toFixed(2);
  console.log(nickelTotal)
  nickelTotalLabel.innerHTML = nickelTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + .05).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// Dime
dimeTotal = 0;
console.log(dimeTotal)

let dimeTotalLabel = document.getElementById("dimeTotalLabel");
dimeTotalLabel.innerHTML = dimeTotal;

let dimeTotalUp = document.getElementById("dimeTotalUp");
let dimeTotalDown = document.getElementById("dimeTotalDown");

dimeTotalUp.addEventListener("click", function() {
  dimeTotal = (parseFloat(dimeTotal) + .10).toFixed(2);
  console.log(dimeTotal);
  dimeTotalLabel.innerHTML = dimeTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + .10).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

dimeTotalDown.addEventListener("click", function() {
  if (dimeTotal <= 0) {
    return;
  }
  dimeTotal = (parseFloat(dimeTotal) - .10).toFixed(2);
  console.log(dimeTotal)
  dimeTotalLabel.innerHTML = dimeTotal;
  
  console.log("dime: ")
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + .10).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// Quarter
quarterTotal = 0;
console.log(quarterTotal)

let quarterTotalLabel = document.getElementById("quarterTotalLabel");
quarterTotalLabel.innerHTML = quarterTotal;

let quarterTotalUp = document.getElementById("quarterTotalUp");
let quarterTotalDown = document.getElementById("quarterTotalDown");

quarterTotalUp.addEventListener("click", function() {
  quarterTotal = (parseFloat(quarterTotal) + .25).toFixed(2);
  console.log(quarterTotal);
  quarterTotalLabel.innerHTML = quarterTotal;
});

quarterTotalDown.addEventListener("click", function() {
  if (quarterTotal <= 0) {
    return;
  }
  quarterTotal = (parseFloat(quarterTotal) - .25).toFixed(2);
  console.log(quarterTotal)
  quarterTotalLabel.innerHTML = quarterTotal;
});

// OneDollar
oneDollarTotal = 0;
console.log(oneDollarTotal)

let oneDollarTotalLabel = document.getElementById("oneDollarTotalLabel");
oneDollarTotalLabel.innerHTML = oneDollarTotal;

let oneDollarTotalUp = document.getElementById("oneDollarTotalUp");
let oneDollarTotalDown = document.getElementById("oneDollarTotalDown");

oneDollarTotalUp.addEventListener("click", function() {
  oneDollarTotal = (parseFloat(oneDollarTotal) + 1.00).toFixed(2);
  console.log(oneDollarTotal);
  oneDollarTotalLabel.innerHTML = oneDollarTotal;
});

oneDollarTotalDown.addEventListener("click", function() {
  if (oneDollarTotal <= 0) {
    return;
  }
  oneDollarTotal = (parseFloat(oneDollarTotal) - 1.00).toFixed(2);
  console.log(oneDollarTotal)
  oneDollarTotalLabel.innerHTML = oneDollarTotal;
});

// Five Dollar
fiveDollarTotal = 0;
console.log(fiveDollarTotal)

let fiveDollarTotalLabel = document.getElementById("fiveDollarTotalLabel");
fiveDollarTotalLabel.innerHTML = fiveDollarTotal;

let fiveDollarTotalUp = document.getElementById("fiveDollarTotalUp");
let fiveDollarTotalDown = document.getElementById("fiveDollarTotalDown");

fiveDollarTotalUp.addEventListener("click", function() {
  fiveDollarTotal = (parseFloat(fiveDollarTotal) + 5.00).toFixed(2);
  console.log(fiveDollarTotal);
  fiveDollarTotalLabel.innerHTML = fiveDollarTotal;
});

fiveDollarTotalDown.addEventListener("click", function() {
  if (fiveDollarTotal <= 0) {
    return;
  }
  fiveDollarTotal = (parseFloat(fiveDollarTotal) - 5.00).toFixed(2);
  console.log(fiveDollarTotal)
  fiveDollarTotalLabel.innerHTML = oneDollarTotal;
});

// Ten Dollar
tenDollarTotal = 0;
console.log(tenDollarTotal)

let tenDollarTotalLabel = document.getElementById("tenDollarTotalLabel");
tenDollarTotalLabel.innerHTML = tenDollarTotal;

let tenDollarTotalUp = document.getElementById("tenDollarTotalUp");
let tenDollarTotalDown = document.getElementById("tenDollarTotalDown");

tenDollarTotalUp.addEventListener("click", function() {
  tenDollarTotal = (parseFloat(tenDollarTotal) + 10.00).toFixed(2);
  console.log(tenDollarTotal);
  tenDollarTotalLabel.innerHTML = tenDollarTotal;
});

tenDollarTotalDown.addEventListener("click", function() {
  if (tenDollarTotal <= 0) {
    return;
  }
  tenDollarTotal = (parseFloat(tenDollarTotal) - 10.00).toFixed(2);
  console.log(tenDollarTotal)
  tenDollarTotalLabel.innerHTML = tenDollarTotal;
});

// Twenty Dollar
twentyDollarTotal = 0;
console.log(twentyDollarTotal)

let twentyDollarTotalLabel = document.getElementById("twentyDollarTotalLabel");
twentyDollarTotalLabel.innerHTML = twentyDollarTotal;

let twentyDollarTotalUp = document.getElementById("twentyDollarTotalUp");
let twentyDollarTotalDown = document.getElementById("twentyDollarTotalDown");

twentyDollarTotalUp.addEventListener("click", function() {
  twentyDollarTotal = (parseFloat(twentyDollarTotal) + 20.00).toFixed(2);
  console.log(twentyDollarTotal);
  twentyDollarTotalLabel.innerHTML = twentyDollarTotal;
});

twentyDollarTotalDown.addEventListener("click", function() {
  if (twentyDollarTotal <= 0) {
    return;
  }
  twentyDollarTotal = (parseFloat(twentyDollarTotal) - 20.00).toFixed(2);
  console.log(twentyDollarTotal)
  twentyDollarTotalLabel.innerHTML = twentyDollarTotal;
});

// One Hundred Dollar
oneHundredDollarTotal = 0;
console.log(oneHundredDollarTotal)

let oneHundredDollarTotalLabel = document.getElementById("oneHundredDollarTotalLabel");
oneHundredDollarTotalLabel.innerHTML = oneHundredDollarTotal;

let oneHundredDollarTotalUp = document.getElementById("oneHundredDollarTotalUp");
let oneHundredDollarTotalDown = document.getElementById("oneHundredDollarTotalDown");

oneHundredDollarTotalUp.addEventListener("click", function() {
  oneHundredDollarTotal = (parseFloat(oneHundredDollarTotal) + 100.00).toFixed(2);
  console.log(oneHundredDollarTotal);
  oneHundredDollarTotalLabel.innerHTML = oneHundredDollarTotal;
});

oneHundredDollarTotalDown.addEventListener("click", function() {
  if (oneHundredDollarTotal <= 0) {
    return;
  }
  oneHundredDollarTotal = (parseFloat(oneHundredDollarTotal) - 100.00).toFixed(2);
  console.log(oneHundredDollarTotal)
  oneHundredDollarTotalLabel.innerHTML = oneHundredDollarTotal;
});

// Outside of currency
