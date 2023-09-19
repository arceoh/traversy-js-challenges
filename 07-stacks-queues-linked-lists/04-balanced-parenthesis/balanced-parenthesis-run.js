const balancedParenthesis = require("./balanced-parenthesis");

const result1 = balancedParenthesis("(a d)a sf(sa da)(as df)sad fad fsa");
const result2 = balancedParenthesis("asdfa sdf (asdf afsd)(sa dfdf");

console.log("#1: ", result1);
console.log("#2: ", result2);
