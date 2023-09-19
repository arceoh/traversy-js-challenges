class HashTable {
  constructor(limit = 14) {
    this.storage = [];
    this.limit = limit;
  }

  _hash(key, max) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }

  printTable() {
    console.log(this.storage);
  }

  set(key, value) {
    const index = this._hash(key, this.limit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [key, value];
    }
  }
}

module.exports = HashTable;
