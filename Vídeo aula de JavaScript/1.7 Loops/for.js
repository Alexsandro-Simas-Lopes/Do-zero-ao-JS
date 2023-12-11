for (let index = 0 ; index <= 5; index++) {
    console.log(index);
}
const cars = [ "Ferrari", "Tesla", "Mercedes"];

console.log(" ")
console.log(" FOR LOOP forma mais complexa = Não aconcelhavel para listas ")

// FOR LOOP forma mais complexa = Não aconcelhavel para listas 
for (let c = 0; c < cars.length; c++) {
    console.log(cars[c]);
}

console.log(" ")
console.log(" FOR OFF Não tem segundo parametro ")

// FOR OFF Não tem segundo parametro
for (let car of cars) {
    console.log(car);
}

console.log(" ")
console.log(" FOR EACH Possui segundo parametro ")

// FOR EACH Possui segundo parametro
cars.forEach(function(car, index) {
    console.log(index);
    console.log(car);
});

console.log(" ")

let index = 0;
while (index < 10) {
    console.log("index é menor do que 10!");
    index++;
}

console.log(" ")
console.log(" Propriedade dinâmica - Não é muito performatico ou usado pelo java")
const person = {
    name: 'Jane',
    age: '21',
};
for (property in person) {
    console.log(person[property]);
}

