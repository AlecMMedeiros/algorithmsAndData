// Create an algorithm that runs through a one-dimensional array
// containing letters and numbers: [ “a”, 10, “b”, “hola”, 122, 15]

const arr = ["c", 12, "b", "hola", 122, 15];

function printArrayResults(arr) {
  const letters = arr.filter((el) => typeof el === "string");
  const numbers = arr.filter((el) => typeof el === "number");
  const highestNumber = Math.max(...numbers);

  console.log("Array:", arr);
  console.log("Letters:", letters);
  console.log("Numbers:", numbers);
  console.log("Highest number:", highestNumber);
};

printArrayResults(arr);


