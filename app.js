let itemTotal = document.getElementById("itemTotal").value;
console.log(itemTotal);

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