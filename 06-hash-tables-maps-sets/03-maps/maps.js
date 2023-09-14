const nameMap = new Map();

nameMap.set(1, "John");
const myFunction = (str) => {
  console.log(str);
};

nameMap.set(myFunction, "myFunction");

// console.log(nameMap);

nameMap.get(myFunction("Pizza"));
