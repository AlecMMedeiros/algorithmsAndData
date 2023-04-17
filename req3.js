// Create an algorithm that generates the following random ID pattern: XXXX-AAAA-BBBB-CCCC

function getRandomCharacter() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return chars[Math.floor(Math.random() * chars.length)];
}

function generateRandomPattern(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += getRandomCharacter();
  }
  return result;
}

function generateId() {
  const pattern = "XXXX-AAAA-BBBB-CCCC";
  const parts = pattern.split("-").map(part => {
    const length = part.length;
    return generateRandomPattern(length);
  });

  return parts.join("-");
}

const id = generateId();
console.log("Generated ID:", id);
