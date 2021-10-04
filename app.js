// price of items
let priceTotal = document.getElementById("priceTotal").value;
console.log("priceTotal: ");
console.log(priceTotal);

// the bills and coins the user gives to cashier clerk
let cashGivenTotal = document.getElementById("cashGivenTotal").value;
console.log("cashGivenTotal: ");
console.log(cashGivenTotal);


// the total of the increment/ decrement of the bills and coins in the register
var cashRegisterTotal = document.getElementById("cashRegisterTotal");
cashRegisterTotal.innerHTML = 0;

// the output of the final function; it gives status of change transaction
var cashReturn = document.getElementById("cashReturn");
cashReturn.innerHTML = "None";


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

// increment up
pennyTotalUp.addEventListener("click", function() {
  pennyTotal = (parseFloat(pennyTotal) + .01).toFixed(2);
  console.log(pennyTotal);
  pennyTotalLabel.innerHTML = pennyTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + .01).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// increment down
pennyTotalDown.addEventListener("click", function() {
  if (pennyTotal <= 0) {
    return;
  }
  pennyTotal = (parseFloat(pennyTotal) - .01).toFixed(2);
  console.log(pennyTotal)
  pennyTotalLabel.innerHTML = pennyTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) - .01).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// Nickel
nickelTotal = 0;
console.log(nickelTotal)

let nickelTotalLabel = document.getElementById("nickelTotalLabel");
nickelTotalLabel.innerHTML = nickelTotal;

let nickelTotalUp = document.getElementById("nickelTotalUp");
let nickelTotalDown = document.getElementById("nickelTotalDown");


// increment up
nickelTotalUp.addEventListener("click", function() {
  nickelTotal = (parseFloat(nickelTotal) + .05).toFixed(2);
  console.log(nickelTotal);
  nickelTotalLabel.innerHTML = nickelTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + .05).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// increment down
nickelTotalDown.addEventListener("click", function() {
  if (nickelTotal <= 0) {
    return;
  }
  nickelTotal = (parseFloat(nickelTotal) - .05).toFixed(2);
  console.log(nickelTotal)
  nickelTotalLabel.innerHTML = nickelTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) - .05).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// Dime
dimeTotal = 0;
console.log(dimeTotal)

let dimeTotalLabel = document.getElementById("dimeTotalLabel");
dimeTotalLabel.innerHTML = dimeTotal;

let dimeTotalUp = document.getElementById("dimeTotalUp");
let dimeTotalDown = document.getElementById("dimeTotalDown");

// increment up
dimeTotalUp.addEventListener("click", function() {
  dimeTotal = (parseFloat(dimeTotal) + .10).toFixed(2);
  console.log(dimeTotal);
  dimeTotalLabel.innerHTML = dimeTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + .10).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// increment down
dimeTotalDown.addEventListener("click", function() {
  if (dimeTotal <= 0) {
    return;
  }
  dimeTotal = (parseFloat(dimeTotal) - .10).toFixed(2);
  console.log(dimeTotal)
  dimeTotalLabel.innerHTML = dimeTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) - .10).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// Quarter
quarterTotal = 0;
console.log(quarterTotal)

let quarterTotalLabel = document.getElementById("quarterTotalLabel");
quarterTotalLabel.innerHTML = quarterTotal;

let quarterTotalUp = document.getElementById("quarterTotalUp");
let quarterTotalDown = document.getElementById("quarterTotalDown");

// increment up
quarterTotalUp.addEventListener("click", function() {
  quarterTotal = (parseFloat(quarterTotal) + .25).toFixed(2);
  console.log(quarterTotal);
  quarterTotalLabel.innerHTML = quarterTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + .25).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// increment down
quarterTotalDown.addEventListener("click", function() {
  if (quarterTotal <= 0) {
    return;
  }
  quarterTotal = (parseFloat(quarterTotal) - .25).toFixed(2);
  console.log(quarterTotal)
  quarterTotalLabel.innerHTML = quarterTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) - .25).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// OneDollar
oneDollarTotal = 0;
console.log(oneDollarTotal)

let oneDollarTotalLabel = document.getElementById("oneDollarTotalLabel");
oneDollarTotalLabel.innerHTML = oneDollarTotal;

let oneDollarTotalUp = document.getElementById("oneDollarTotalUp");
let oneDollarTotalDown = document.getElementById("oneDollarTotalDown");

// increment up
oneDollarTotalUp.addEventListener("click", function() {
  oneDollarTotal = (parseFloat(oneDollarTotal) + 1.00).toFixed(2);
  console.log(oneDollarTotal);
  oneDollarTotalLabel.innerHTML = oneDollarTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + 1.00).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// increment down
oneDollarTotalDown.addEventListener("click", function() {
  if (oneDollarTotal <= 0) {
    return;
  }
  oneDollarTotal = (parseFloat(oneDollarTotal) - 1.00).toFixed(2);
  console.log(oneDollarTotal)
  oneDollarTotalLabel.innerHTML = oneDollarTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) - 1.00).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// Five Dollar
fiveDollarTotal = 0;
console.log(fiveDollarTotal)

let fiveDollarTotalLabel = document.getElementById("fiveDollarTotalLabel");
fiveDollarTotalLabel.innerHTML = fiveDollarTotal;

let fiveDollarTotalUp = document.getElementById("fiveDollarTotalUp");
let fiveDollarTotalDown = document.getElementById("fiveDollarTotalDown");

// increment up
fiveDollarTotalUp.addEventListener("click", function() {
  fiveDollarTotal = (parseFloat(fiveDollarTotal) + 5.00).toFixed(2);
  console.log(fiveDollarTotal);
  fiveDollarTotalLabel.innerHTML = fiveDollarTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + 5.00).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// increment down
fiveDollarTotalDown.addEventListener("click", function() {
  if (fiveDollarTotal <= 0) {
    return;
  }
  fiveDollarTotal = (parseFloat(fiveDollarTotal) - 5.00).toFixed(2);
  console.log(fiveDollarTotal)
  fiveDollarTotalLabel.innerHTML = oneDollarTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) - 5.00).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// Ten Dollar
tenDollarTotal = 0;
console.log(tenDollarTotal)

let tenDollarTotalLabel = document.getElementById("tenDollarTotalLabel");
tenDollarTotalLabel.innerHTML = tenDollarTotal;

let tenDollarTotalUp = document.getElementById("tenDollarTotalUp");
let tenDollarTotalDown = document.getElementById("tenDollarTotalDown");

// increment up
tenDollarTotalUp.addEventListener("click", function() {
  tenDollarTotal = (parseFloat(tenDollarTotal) + 10.00).toFixed(2);
  console.log(tenDollarTotal);
  tenDollarTotalLabel.innerHTML = tenDollarTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + 10.00).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// increment down
tenDollarTotalDown.addEventListener("click", function() {
  if (tenDollarTotal <= 0) {
    return;
  }
  tenDollarTotal = (parseFloat(tenDollarTotal) - 10.00).toFixed(2);
  console.log(tenDollarTotal)
  tenDollarTotalLabel.innerHTML = tenDollarTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) - 10.00).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// Twenty Dollar
twentyDollarTotal = 0;
console.log(twentyDollarTotal)

let twentyDollarTotalLabel = document.getElementById("twentyDollarTotalLabel");
twentyDollarTotalLabel.innerHTML = twentyDollarTotal;

let twentyDollarTotalUp = document.getElementById("twentyDollarTotalUp");
let twentyDollarTotalDown = document.getElementById("twentyDollarTotalDown");

// increment up
twentyDollarTotalUp.addEventListener("click", function() {
  twentyDollarTotal = (parseFloat(twentyDollarTotal) + 20.00).toFixed(2);
  console.log(twentyDollarTotal);
  twentyDollarTotalLabel.innerHTML = twentyDollarTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + 20.00).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// increment down
twentyDollarTotalDown.addEventListener("click", function() {
  if (twentyDollarTotal <= 0) {
    return;
  }
  twentyDollarTotal = (parseFloat(twentyDollarTotal) - 20.00).toFixed(2);
  console.log(twentyDollarTotal)
  twentyDollarTotalLabel.innerHTML = twentyDollarTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) - 20.00).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// One Hundred Dollar
oneHundredDollarTotal = 0;
console.log(oneHundredDollarTotal)

let oneHundredDollarTotalLabel = document.getElementById("oneHundredDollarTotalLabel");
oneHundredDollarTotalLabel.innerHTML = oneHundredDollarTotal;

let oneHundredDollarTotalUp = document.getElementById("oneHundredDollarTotalUp");
let oneHundredDollarTotalDown = document.getElementById("oneHundredDollarTotalDown");

// increment up
oneHundredDollarTotalUp.addEventListener("click", function() {
  oneHundredDollarTotal = (parseFloat(oneHundredDollarTotal) + 100.00).toFixed(2);
  console.log(oneHundredDollarTotal);
  oneHundredDollarTotalLabel.innerHTML = oneHundredDollarTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) + 100.00).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// increment down
oneHundredDollarTotalDown.addEventListener("click", function() {
  if (oneHundredDollarTotal <= 0) {
    return;
  }
  oneHundredDollarTotal = (parseFloat(oneHundredDollarTotal) - 100.00).toFixed(2);
  console.log(oneHundredDollarTotal)
  oneHundredDollarTotalLabel.innerHTML = oneHundredDollarTotal;
  
  cashRegisterTotalAmount = (parseFloat(cashRegisterTotalAmount) - 100.00).toFixed(2);
  cashRegisterTotal.innerHTML = cashRegisterTotalAmount;
});

// Prepare for copy and paste function. Prepare for copy and paste function. Prepare for copy and paste function. Prepare for copy and paste function. Prepare for copy and paste function.


let submitToRegister = document.getElementById("submitToRegister");

submitToRegister.addEventListener("click", function() {
  console.log("Hello World 2!");
  
  let pennyRecord = ['PENNY', parseFloat(pennyTotal).toFixed(2)];
  let nickelRecord = ['NICKEL',  parseFloat(nickelTotal).toFixed(2)];
  let dimeRecord = ['DIME', parseFloat(dimeTotal).toFixed(2)];
  let quarterRecord = ['QUARTER', parseFloat(quarterTotal).toFixed(2)];
  let oneRecord = ['ONE', parseFloat(oneDollarTotal).toFixed(2)];
  let fiveRecord = ['FIVE', parseFloat(fiveDollarTotal).toFixed(2)];
  let tenRecord = ['TEN', parseFloat(tenDollarTotal).toFixed(2)];
  let twentyRecord = ['TWENTY', parseFloat(twentyDollarTotal).toFixed(2)];
  let oneHundredRecord = ['ONE HUNDRED', parseFloat(oneHundredDollarTotal).toFixed(2)] // Recorded as 'ONE HUNDRED'
  
  console.log(pennyRecord);
  console.log(nickelRecord);
  console.log(dimeRecord);
  console.log(quarterRecord);
  console.log(oneRecord);
  console.log(fiveRecord);
  console.log(tenRecord);
  console.log(twentyRecord);
  console.log(oneHundredRecord);
  
  let recordArray = [];
  recordArray.push(pennyRecord);
  recordArray.push(nickelRecord);
  recordArray.push(dimeRecord);
  recordArray.push(quarterRecord);
  recordArray.push(oneRecord);
  recordArray.push(fiveRecord);
  recordArray.push(tenRecord);
  recordArray.push(twentyRecord);
  recordArray.push(oneHundredRecord);
  
  console.log(recordArray);
  
  totalCashCid = 0; // sum of all cash in the cid parameter
  cidObj = {}

  priceTotal = document.getElementById("priceTotal").value;
  console.log("priceTotal: ");
  console.log(priceTotal);

  // the bills and coins the user gives to cashier clerk
  cashGivenTotal = document.getElementById("cashGivenTotal").value;
  console.log("cashGivenTotal: ");
  
  let output = checkCashRegister(parseFloat(priceTotal).toFixed(2), parseFloat(cashGivenTotal).toFixed(2), recordArray);
  console.log(output)
  if (output["change"].length > 0) {
    let s = "";
    for (change of output["change"]) {
      console.log("change " + change[0])
      console.log(typeof change[0])
      console.log("change " + change[1])
      console.log(typeof change[1])
      if (change[1] !== '0.00') {
        s += change[0].slice(0, 1).toUpperCase() + change[0].slice(1, change[0].length).toLowerCase() + " " + (parseFloat(change[1])).toFixed(2) + " ";
      }
    }
    cashReturn.innerHTML = "Status: " + output["status"] + "\n Change: " + s;
  }
  else {
    cashReturn.innerHTML = "Status: " + output["status"];
  }
  
  
  
});

/* COPY AND PASTE FUNCTION COPY AND PAST FUNCTION COPY AND PASTE FUNCTION COPY AND PASTE FUNCTION COPY AND PAST FUNCTION COPY AND PASTE FUNCTION COPY AND PASTE FUNCTION COPY AND PAST FUNCTION COPY AND PASTE FUNCTION COPY AND PASTE FUNCTION COPY AND PAST FUNCTION COPY AND PASTE FUNCTION COPY AND PASTE FUNCTION COPY AND PAST FUNCTION COPY AND PASTE FUNCTION COPY AND PASTE FUNCTION COPY AND PAST FUNCTION COPY AND PASTE FUNCTION COPY AND PASTE FUNCTION COPY AND PAST FUNCTION COPY AND PASTE FUNCTION COPY AND PASTE FUNCTION COPY AND PAST FUNCTION COPY AND PASTE FUNCTION COPY AND PASTE FUNCTION COPY AND PAST FUNCTION COPY AND PASTE FUNCTION COPY AND PASTE FUNCTION COPY AND PAST FUNCTION COPY AND PASTE FUNCTION */

// global var for hardcoded values of bills and currency

var currencyGlobal = {
  'PENNY': .01,
  'NICKEL': .05,
  'DIME': 0.10,
  'QUARTER':	0.25,
  'ONE'	: 1.00,
  'FIVE' : 5.00,
  'TEN' : 10.00,
  'TWENTY' : 20.00,
  'ONE HUNDRED' : 100
}

// declare both as global var

let totalCashCid = 0; // sum of all cash in the cid parameter
let cidObj = {} // a mutable copy of cid; we will not manipulate cid param after vals are copied

tallyCid = (cid) => {
  for (let c of cid) { // for each type of cash
    totalCashCid += parseFloat(c[1]); // add up all bills and coins in the cid and store in a global var
    cidObj[c[0]] = parseFloat(c[1]); // copy cid to cidObj
  }
  console.log("totalCashCid: " + totalCashCid)
  console.log("cidObj: ")
  console.log(cidObj);
}

// checks if exact change due and amount in register (bussiness logic requires seperate status)
checkExactChange = (cashRemainder) => {
  if (cashRemainder == totalCashCid) {
    return true;
  }
  return false
}

// checks if change due is greater than available amount in cash register
checkInsufficentFunds1 = (cashRemainder) => {
   if (cashRemainder > totalCashCid) {
     return true;
  }
  return false;
}

checkNegativeBalance = (cashDiff) => {
   if (cashDiff < 0) {
     return true;
  }
  return false;
}

checkCashRegister = (price, cash, cid) => {
  let cashReturn = []; // this arr to be returned after operations
  let cashDiff = parseFloat(cash - price).toFixed(2); // the amount of change due
  console.log(cashDiff)
  
  let cashRemainder = cashDiff; // we will manipulate this mutable var; we leave cashDiff as an immutable var
  console.log("cash: " + cash)
  console.log("price: " + price)
  console.log("Cash Diff: " + cashDiff)
  console.log("Cash Diff: " + typeof cashDiff)
  console.log("Cash Remainder: " + cashRemainder)
  console.log("Cash Remainder: " + typeof cashRemainder)
  
  tallyCid(cid); // updates totalCashCid and cidObj
  totalCashCid = (parseFloat(totalCashCid)).toFixed(2); // currency has 2 decimal places
  console.log("totalCashCid: " + totalCashCid)
  
  if (checkExactChange(cashRemainder) === true) {  // see function documentation
    return {'status' : 'CLOSED', 'change' :  cid}
  }
  else if (checkInsufficentFunds1(cashRemainder) === true) { // see function documentation
    return {'status' : 'INSUFFICIENT_FUNDS', 'change' :  []}
  }
  else if(checkNegativeBalance(cashDiff) ===true) {
     return {'status' : 'NEGATIVE_BALANCE', 'change' :  []}
  }
 
  // divisible by hundred's bill
    if (cashRemainder / 100 > 0) {
      let hundredDollar = parseInt(cashRemainder / 100); // get number of one hundred bills that divide into the remaining cash (cashRemainder)
      let avaliableCash = cidObj['ONE HUNDRED'] / 100; // get the number of one hundred bills available to use base on # of one hundred bills in cid param
      if (avaliableCash < hundredDollar) { // the one hundred bill fits in, but not enough bills in register to give full amount ie. 300 % 3 One Hundred bills gives 3 One Hundred bills, but only 2 One Hundred bills avaliable, so simply give 2 One hundred bills, because its as close as we can get to close the negative balance
      hundredDollar = avaliableCash; // there are less one hundred bills in cid than can divide into cashRemainder
    }
    let hundredRecord = ['ONE HUNDRED', hundredDollar * 100]; // record the # of one hundred bills that can fit and are available to reduce the balance of cashRemainder
    if (hundredRecord[1] !== 0) { // only record bills with at least 1 bill; ignore bills with 0 qty
      cashReturn.push(hundredRecord)
    }
    // decr the cashRemainder value by # of one hundred bills times the value of the one hundred bills
    cashRemainder = parseFloat(cashRemainder - (100 * hundredDollar)).toFixed(2); // b/c in this if statement, assume at least 1 One hundred bill was added to the cashReturn arr
  }
  
  // compare rest to one hundred bill documentation
  // divisible by twenty's bill
  if (cashRemainder / 20 > 0) {
    let twentDollar = parseInt(cashRemainder / 20);
    let avaliableCash = cidObj['TWENTY'] / 20;
    if (avaliableCash < twentDollar) {
      twentDollar = avaliableCash;
    }
    let twentRecord = ['TWENTY', twentDollar * 20];
    if (twentRecord[1] !== 0) {
      cashReturn.push(twentRecord)
    }
    cashRemainder = parseFloat(cashRemainder - (20 * twentDollar)).toFixed(2);
  }

  // divisible by ten's bill
  if (cashRemainder / 10 > 0) {
    let tenDollar = parseInt(cashRemainder / 10);
    let avaliableCash = cidObj['TEN'] / 10;
    if (avaliableCash < tenDollar) {
      tenDollar = avaliableCash;
    }
    let tenRecord = ['TEN', tenDollar * 10];
    if (tenRecord[1] !== 0) {
      cashReturn.push(tenRecord)
    }
    cashRemainder = parseFloat(cashRemainder - (10 * tenDollar)).toFixed(2)
  }

  // divisible by five's bill
  if (cashRemainder / 5 > 0) {
    let fiveDollar = parseInt(cashRemainder / 5);
    let avaliableCash = cidObj['FIVE'] / 5;
    if (avaliableCash < fiveDollar) {
      fiveDollar = avaliableCash;
    }
    let fiveRecord = ['FIVE', fiveDollar * 5];
    if (fiveRecord[1] !== 0) {
      cashReturn.push(fiveRecord)
    }
    cashRemainder = parseFloat(cashRemainder - (5 * fiveDollar)).toFixed(2)
  }

  // divisible by one's bill
  if (cashRemainder / 1 > 0) {
    let oneDollar = parseInt(cashRemainder / 1);
    let avaliableCash = cidObj['ONE'] / 1;
    if (avaliableCash < oneDollar) {
      oneDollar = avaliableCash;
    }
    let oneRecord = ['ONE', oneDollar * 1];
    if (oneRecord[1] !== 0) {
      cashReturn.push(oneRecord)
    }
    cashRemainder = parseFloat(cashRemainder - (1 * oneDollar)).toFixed(2);
    (cashRemainder)
  }

  // divisible by quarter
  if (cashRemainder / .25 > 0) {
    let numQuart = parseInt(cashRemainder / .25);
    let avaliableCash = cidObj['QUARTER'] / .25;
    if (avaliableCash < numQuart) {
      numQuart = avaliableCash;
    }
    let quarterRecord = ['QUARTER', numQuart * .25];
    if (quarterRecord[1] !== 0) {
      cashReturn.push(quarterRecord)
    }
    cashRemainder = parseFloat(cashRemainder - (.25 * numQuart)).toFixed(2)
    
  }
  // divisible by dime
  if (cashRemainder / .10 > 0) {
    let numDime = parseInt(cashRemainder / .10);
    let avaliableCash = cidObj['DIME'] / .10;
    if (avaliableCash < numDime) {
      numDime = avaliableCash;
    }
    let dimeRecord = ['DIME', numDime * .10];
    if (dimeRecord[1] !== 0) {
      cashReturn.push(dimeRecord)
    }
    cashRemainder = parseFloat(cashRemainder - (.10 * numDime)).toFixed(2)
  }

  // divisible by nickel's
  if (cashRemainder / .05 > 0) {
    let numNick = parseInt(cashRemainder / .05);
    let avaliableCash = cidObj['NICKEL'] / .05;
    if (avaliableCash < numNick) {
      numNick = avaliableCash;
    }
    let nickRecord = ['NICKEL', numNick * .05];
    if (nickRecord[1] !== 0) {
      cashReturn.push(nickRecord)
    }
    cashRemainder = parseFloat(cashRemainder - (.05 * numNick)).toFixed(2)
  }
  // divisible by pennie's
  if (cashRemainder / .01 > 0) {
    let numPenn = parseInt(cashRemainder / .01);
    let avaliableCash = cidObj['PENNY'] / .01;
    if (avaliableCash < numPenn) {
      numPenn = avaliableCash;
    }
    let pennRecord = ['PENNY', (numPenn * .01)]; // +.04 account for rounding error
    if (pennRecord[1] !== 0) {
      cashReturn.push(pennRecord)
    }
    cashRemainder = parseFloat(cashRemainder - (.01 * numPenn)).toFixed(2)
  }
  // * calc new cashRemainder ie. cashRemainder % 100

  // create var to record the exact cash amount of all currency we appended to the cashReturn arr of arr var
  console.log("cashRemainder: " + cashRemainder)
  let totalInCashReturn = 0;
  for (let cash of cashReturn) {
    totalInCashReturn += cash[1]; // incr by the cash amount for each bill/coin
  }
  // cashDiff = parseFloat(cashDiff).toFixed(2)
  totalInCashReturn = parseFloat(totalInCashReturn).toFixed(2); // format, currency has 2 decimal places
  if (cashDiff % totalInCashReturn !== 0 ){ // check for exact change
    return {'status' : 'INSUFFICIENT_FUNDS', 'change' :  []} // not exact change
  }
  return {status: "OPEN", change: cashReturn} // exact change
}
