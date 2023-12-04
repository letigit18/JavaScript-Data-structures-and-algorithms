function Car(name){
    var carName = name;
    this.setName = function(name){
        carName = name;
        
    } 
    this.getName = function(){
        return carName;
    }
}
let car1 = new Car("Toyota");
//car1.setName('Ferari')
console.log(car1.getName())
//prototypal inheritance implementation to sumup to numbers and return result 
function Numbers1(n1, n2){
    var num1 = n1;
    var num2 = n2;

    //define 3 public methods 
    this.setNumbers= function(number1, number2){
        number1 = num1
        number2 = num2
    }
    this.calculateSum = function(numb1, numb2){
        let numb1 = num1
        let numb2 = num2
        return numb1 + numb2
    }

}
let sum = new Numbers1(3, 7);
console.log(sum.calculateSum(10,3))