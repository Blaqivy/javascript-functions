// function to check the data type of a variable
const add = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    return "Parameters are not both numbers.";
  } else {
    return "Parameters are both numbers.";
  }
};

// Function to calculate the sum of an array of numbers
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
module.exports = {
  add, 
  sumArray,
  isPalindrome
 };
