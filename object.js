//object value assignment 
let foos = {}
 let foo2 = new Object;
 foo2.numbers = [13, 115, 353]
 for (let i = 0; i < 3; i++){
    foo2[`${i} th data = `] = 10 + i;
 }
 console.log(foo2)
 //creating a function that acts like a class
 function Student(n){
    this.name = n;
    this.age;
    this.displayMessage = () =>{
        console.log(`hell there, ${this.name}`)
    }
 }
 let s1 = new Student("Leti");
 s1.displayMessage()
 //prototypal inheritance
 function Car(){
    this.carname = "Toyota"; //public variables
    this.carmodel;
 }
let car1 = new Car();
 Car.prototype.sayHello = function (){
    console.log(this.carname)
 }
 car1.sayHello();
 car1.carname;
//private variables
function Fruit(name, color){
    var fname = name;
    var fcolor = color;
    this.getName = function (){
        return fname;
    }
    this.setName = function(name){
        fname = name;
    }
    this.getColor = function(){
        return fcolor;
    }
    this.setColor = function(colorname){
        fcolor = colorname
    }
}
let f1 = new Fruit("Banana", "yellow");
f1.setColor("Red")
console.log(f1.fname)
console.log(f1.getName())
console.log(f1.getColor())