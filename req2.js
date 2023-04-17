//Create a hashmap (or a simple object in PHP) that contains the elementary functions of addition,
// subtraction, multiplication, and division.

const elementaryFunctions = {
  addition: function (numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
  },
  subtraction: function (numbers) {
    return numbers.reduce((difference, current) => difference - current);
  },
  multiplication: function (numbers) {
    return numbers.reduce((product, current) => product * current, 1);
  },
  division: function (a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  },
};


const sum = elementaryFunctions.addition([1, 2, 3, 4]);
console.log("Sum:", sum);

const difference = elementaryFunctions.subtraction([10, 2, 1]);

const quotient = elementaryFunctions.division(10, 0);
console.log("Quotient:", quotient);
