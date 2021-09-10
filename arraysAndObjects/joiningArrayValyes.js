"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function joinArrayValues(myArray, separator) {
  /*
   * Write your code here and return the output.
   */
   let result = myArray.join(separator);
   return result;
}

/* Please do not modify anything below this line */

function main() {
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  let separator =  readLine();
  
  let newString = joinArrayValues(myArray, separator);
  
  console.log(newString);
}
