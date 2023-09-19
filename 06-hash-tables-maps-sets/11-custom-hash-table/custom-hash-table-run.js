const HashTable = require("./custom-hash-table");

const myHashTable = new HashTable();

const result = myHashTable._hash("John", 55);
console.log("Hash:", result);

myHashTable.set("John");

myHashTable.printTable();
