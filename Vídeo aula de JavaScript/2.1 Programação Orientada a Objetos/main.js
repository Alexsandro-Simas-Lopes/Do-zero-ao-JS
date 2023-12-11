class Person {
    constructor (firstName, centerName, lastName, age)  {
        this.firstName = firstName,
        this.centerName = centerName,
        this.lastName = lastName,
        this.age = age
    } 
    getFullName() {
    console.log(`${this.firstName} ${this.centerName} ${this.lastName}`)
    } 
    speak() {
    console.log("Hello world!");
    }
}
const person = new Person ("João", "Araújo", "Almeida", 40);
console.log(person);
person.getFullName();
person.speak();

console.log("")// ESPAÇO

class Animal {
    constructor (name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} made some noise!`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(`${this.name} latiu!`);
    }
}

const animal = new Animal("Simba");
const dog = new Dog("Bob");
animal.speak();
dog.speak();