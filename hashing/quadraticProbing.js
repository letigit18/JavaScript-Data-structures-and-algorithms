function HashTable(size){
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}
//inserting the values into the array 
HashTable.prototype.put = function(key, value){
    if(this.limit >= this.size) throw 'the hash table is full'
    let hashedIndex = this.hash(key);
    let squareIndex = 1;
    while(this.keys[hashedIndex] != null){
        hashedIndex += Math.pow(squareIndex, 2)
        hashedIndex
        squareIndex++;

    }
    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
}
//getting the values
HashTable.prototype.get = function(key){
    let hashedIndex = this.hash(key);
    let squareIndex = 1;
    while(this.keys[hashedIndex] != key){
        hashedIndex += Math.pow(squareIndex, 2)
        hashedIndex = hashedIndex % this.size
        squareIndex++;
    }
    return this.values[hashedIndex]
}
HashTable.prototype.hash = function(key){
    if(!Number.isInteger) throw 'key must be number'
    return key % this.size;
}
HashTable.prototype.initArray = function(size){
    var array = [];
    for (let i = 0; i < size; i++){
        array.push(null)
    }
    return array
}
let h1 = new HashTable(17);
h1.put(32, "Selam")
h1.put(44, "Bontu")
console.log(h1.get(44))