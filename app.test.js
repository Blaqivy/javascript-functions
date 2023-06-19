// Test case for data type function
const chai = require("chai");
const { add, sumArray, isPalindrome } = require("./app");
const expect = chai.expect;

describe("add function", () => {
  it('should return "Parameters are both numbers." when both parameters are numbers', () => {
    chai.expect(add(5, 5)).to.equal("Parameters are both numbers.");
  });

  it('should return "Parameters are not both numbers." when one parameter is not a number', () => {
    chai.expect(add(5, "5")).to.equal("Parameters are not both numbers.");
  });

  it('should return "Parameters are not both numbers." when both parameters are not numbers', () => {
    chai.expect(add("5", "5")).to.equal("Parameters are not both numbers.");
  });
});

// Test case for sum of array
describe("sumArray", () => {
  it("should return the sum of all numbers in the array", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [10, 20, 30, 40, 50];
    const arr3 = [-1, -2, -3, -4, -5];

    const result1 = sumArray(arr1);
    const result2 = sumArray(arr2);
    const result3 = sumArray(arr3);

    expect(result1).to.equal(15);
    expect(result2).to.equal(150);
    expect(result3).to.equal(-15);
  });
});

// // Test cases for isPalindrome function
describe('isPalindrome', () => {
  it('should return true if the string is a palindrome', () => {
    const str1 = 'racecar';
    const str2 = 'madam';
    const str3 = 'level';

    const result1 = isPalindrome(str1);
    const result2 = isPalindrome(str2);
    const result3 = isPalindrome(str3);

    expect(result1).to.be.true;
    expect(result2).to.be.true;
    expect(result3).to.be.true;
  });

  it('should return false if the string is not a palindrome', () => {
    const str4 = 'hello';
    const str5 = 'world';
    const str6 = 'openai';

    const result4 = isPalindrome(str4);
    const result5 = isPalindrome(str5);
    const result6 = isPalindrome(str6);

    expect(result4).to.be.false;
    expect(result5).to.be.false;
    expect(result6).to.be.false;
  });
});

