# CashJs

## Purpose and Motivation

This app builds on the success of the previous Github project, [cashRegister](https://github.com/normandy14/cashRegister) project.
The algorithm remains the same as the original, except a few modifications for converting string information from the DOM back into the number type or javaScript.

## Getting Started

This app can simply be downloaded or cloned. Then simply open the index.html file in a browser.

## App Preview
A  view of the app 

![App](https://github.com/normandy14/cashJs/blob/main/cashJsScreenshot.png)

## Challenge Description

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


## Authors

* :ocean: **Normandy14** - *Initial work* - [Github Account](https://github.com/Normandy14)

## License

:newspaper: This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

<!--

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
