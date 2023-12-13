function Stack(array){
    this.array = []
    if(array) {
        this.array = array
    }
}
//getting the buffere
Stack.prototype.getBuffer = function (){
    return this.array.slice();
}
// adding elements to the stack
Stack.prototype.add = function (element){
    return this.array.push(element)
}
//peeking the top element 
Stack.prototype.peek = function (){
    return this.array[this.array.length - 1]
}
//deleting the last element
Stack.prototype.delete = function (){
    return this.array.pop()
}
//accessing nth element in the stack
function accessNthElement(stack, n){
    var bufferArray = stack.getBuffer();
    if(n <= 0) throw 'error'
    let bufferStack = new Stack(bufferArray)
    while (--n != 0){
        bufferStack.delete();
    }
    return bufferStack.delete();
}
let s1 = new Stack()
console.log(s1)
console.log(s1.getBuffer())
s1.add(10)
s1.add(33)
s1.add(22)
s1.add(23)
console.log(accessNthElement(s1, 2))
console.log(s1.getBuffer())
