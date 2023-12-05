let obj = {}
//the first way of adding object key value paires
obj['exampleKeyPropertie'] = 'examplevalue';
//the second way
obj.exampleKeyPropertie = 'examplevalue';
//creating animal class with two methods
function Animal(name, animalType){
    this.animalName = name;
    this.animalType = animalType;
    this.sayName = function(){
        console.log(this.animalName)
    }
    this.sayAnimalType = function(){
        console.log(this.animalType)
    }
}
//creating the Dog class that inherit the Animal class methods

function Dog(name){
Animal.call(this, name, 'Dog')
}
Dog.prototype = Object.create(Animal.prototype)
let d1 = new Dog('pit', 'pittype')
d1.sayName()
d1.sayAnimalType()