function phoneNumberDirectory(arr) {
  const directory = new Map();

  arr.map((item) => {
    const [name, phone] = item.split(":");
    directory.set(name, phone);
  });

  return directory;
}

module.exports = phoneNumberDirectory;
