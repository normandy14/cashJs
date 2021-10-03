let itemTotal = document.getElementById("itemTotal").value;
console.log(itemTotal);

// Penny
let pennyTotal = 0;
console.log(pennyTotal)

let pennyTotalLabel = document.getElementById("pennyTotalLabel");
pennyTotalLabel.innerHTML = pennyTotal;

let pennyTotalUp = document.getElementById("pennyTotalUp");
let pennyTotalDown = document.getElementById("pennyTotalDown");

pennyTotalUp.addEventListener("click", function() {
  pennyTotal = (parseFloat(pennyTotal) + .01).toFixed(2);
  console.log(pennyTotal);
  pennyTotalLabel.innerHTML = pennyTotal;
});

pennyTotalDown.addEventListener("click", function() {
  if (pennyTotal <= 0) {
    return;
  }
  pennyTotal = (parseFloat(pennyTotal) - .01).toFixed(2);
  console.log(pennyTotal)
  pennyTotalLabel.innerHTML = pennyTotal;
});

// Nickel
let nickelTotal = 0;
console.log(nickelTotal)

let nickelTotalLabel = document.getElementById("nickelTotalLabel");
nickelTotalLabel.innerHTML = nickelTotal;

let nickelTotalUp = document.getElementById("nickelTotalUp");
let nickelTotalDown = document.getElementById("nickelTotalDown");

nickelTotalUp.addEventListener("click", function() {
  nickelTotal = (parseFloat(nickelTotal) + .05).toFixed(2);
  console.log(nickelTotal);
  nickelTotalLabel.innerHTML = nickelTotal;
});

nickelTotalDown.addEventListener("click", function() {
  if (nickelTotal <= 0) {
    return;
  }
  nickelTotal = (parseFloat(nickelTotal) - .05).toFixed(2);
  console.log(nickelTotal)
  nickelTotalLabel.innerHTML = nickelTotal;
});

// Dime
let dimeTotal = 0;
console.log(dimeTotal)

let dimeTotalLabel = document.getElementById("dimeTotalLabel");
dimeTotalLabel.innerHTML = dimeTotal;

let dimeTotalUp = document.getElementById("dimeTotalUp");
let dimeTotalDown = document.getElementById("dimeTotalDown");

dimeTotalUp.addEventListener("click", function() {
  dimeTotal = (parseFloat(dimeTotal) + .10).toFixed(2);
  console.log(dimeTotal);
  dimeTotalLabel.innerHTML = dimeTotal;
});

dimeTotalDown.addEventListener("click", function() {
  if (dimeTotal <= 0) {
    return;
  }
  dimeTotal = (parseFloat(dimeTotal) - .10).toFixed(2);
  console.log(dimeTotal)
  dimeTotalLabel.innerHTML = dimeTotal;
});

// Quarter
let quarterTotal = 0;
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