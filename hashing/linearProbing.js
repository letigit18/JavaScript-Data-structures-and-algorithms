function HashTable(size){
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}
HashTable.prototype.put = function (key, value){
    if(this.limit >= this.size) throw 'table is full'
    var hashedIndex = this.hash(key);
    //linear probing
    while(this.keys[hashedIndex] != null){
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }
    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;

}
HashTable.prototype.get = function (key){
var hashedIndex = this.hash(key)
    while(this.keys[hashedIndex] != key){
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }
    return this.values[hashedIndex]
}
HashTable.prototype.hash = function (key){
    if(!Number.isInteger) throw 'it must be integer'
    return key % this.size;
}
HashTable.prototype.initArray = function(size){
 let array = [];
 for (i = 0; i < size; i++){
    array.push(null)
 }
 return array;
}
let h1 = new HashTable(13);
h1.put(30, "Letera");
h1.put(40, "Abdi");
h1.put(90, "Chacha")
console.log(h1.get(90))