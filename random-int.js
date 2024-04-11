const crypto = require("crypto");

// Generate a random integer between min and max (inclusive)
const getRandomInt = (min, max) => {
  const range = max - min + 1;
  const randomBytes = crypto.randomBytes(4); // Use 4 bytes for 32-bit integers
  const randomNumber = randomBytes.readUInt32LE(0); // Convert bytes to integer
  return min + (randomNumber % range);
};

console.log(getRandomInt(1, 100));
