// utility.test.js

const {
  isPalindrome,
  fibonacci,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  factorial,
} = require("./utility");

describe("isPalindrome", () => {
  test("should return true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("should return false for a non-palindrome word", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("should be case insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test("should ignore spaces, punctuation, and special characters", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  });
});


describe("fibonacci", () => {
  test("When a zero is entered it should return a zero", () => {
    
    expect(fibonacci(number)).toBe(false);
  });

  /*test("should return false for a non-fibonacci number", () => {
    expect(fibonacci("hello")).toBe(false);
  });

  test("should be case insensitive", () => {
    expect(fibonacci("RaceCar")).toBe(true);
  });

  test("should ignore spaces, punctuation, and special characters", () => {
    expect(fibonacci("A man, a plan, a canal, Panama")).toBe(true);
  });
});
*/

