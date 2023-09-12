function generateHashtag(str) {
  const cleanStr = str.trim().replace(/ +(?= )/g, "");
  if (cleanStr.length === 0 || cleanStr.length > 140) return false;

  console.log("CLEAN: ", cleanStr);
  const arr = cleanStr.toLowerCase().split(" ");
  console.log("ARR: ", arr);

  const capArr = arr.map((word) => {
    return `${word.at(0).toUpperCase()}${word.slice(1)}`;
  });
  return `#${capArr.join("")}`;
}

module.exports = generateHashtag;
