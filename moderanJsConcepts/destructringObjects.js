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

function main() {
  let userDetails = JSON.parse(readLine().replace(/'/g, '"'));
/* Please do not modify anything above this line */

  /*
   * Write your code here.
   */
   let { username } = userDetails;

/* Please do not modify anything below this line */
  console.log(username);
}
