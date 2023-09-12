const isValidIPv4 = require("./valid-ipv4.js");

const result1 = isValidIPv4("122.164.23.21");
const result2 = isValidIPv4("122.164.23.21.33");

console.log(result1);
console.log("---");
console.log(result2);
