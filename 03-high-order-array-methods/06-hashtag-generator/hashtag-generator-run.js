const generateHashtag = require("./hashtag-generator");

const result = generateHashtag("hello world");
const result2 = generateHashtag(" Hello there thanks for trying my Kata");
const result3 = generateHashtag("    Hello     World   ");

console.log(result);
console.log(result2);
console.log(result3);
