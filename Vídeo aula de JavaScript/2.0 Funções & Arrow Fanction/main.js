function sum(a, b = 10) {
    return a + b;
}
const sunArrow = (a, b = 10) => {return a + b;};// Mais extenso!
const sunValue = sunArrow(2);
console.log(sunValue);
// É o mesmo que:
const sumArrow = (a, b = 10) =>  a + b;// Mais compacto!
const sumValue = sumArrow(2);
console.log(sumValue);