console.log("*Condicionais*")
const sum = 1 + 2;
if (sum === 2) {
    console.log("Sun is 2!");
} else if (sum === 3) {
    console.log("Sun is 3!");
} else {
    console.log("Sun is not 2!");
}

console.log("\n*&&-and e ||-or*")
// && - and (e)
// || - or (ou)
const sum1 = 1 + 2;
const sum2 = 3 + 3;
if (sum1 === 4) {
    console.log("Sum1 is 4!");
} else if (sum2 === 6) {
    console.log("sum2 is 6!");
} else 

console.log("\n*Ternary Operator-Para definir variáveis baseando-se em uma condição*");
//[?] Se for TRUE -- [:] se for FALSE
const num = 2 + 2;
let number = num === 2 ? 2 : num;
console.log(number);


console.log("\nCondição car='...' (Bugatti-Lamborgine-Tesla)")
//SOBRE OS CARROS
const sobreTesla = "A Tesla é uma empresa especializada em carros elétricos fundada em 2003, em São Francisco, Califórnia pelos engenheiros  Martin Eberhard e Marc Tarpenning."
const sobreBugatti = "A Bugatti, por sua vez, continuará a fabricar carros em sua casa atual, Molsheim, na França, de acordo com um anúncio da Porsche."
const sobreLamborgine = "A Lamborghini, pode acreditat, começou como fábrica de tratores e implementos agrícolas. Porém, a italiana ficou famosa ao se inserir no mercado de esportivos de luxo que já incluía, entre outros, a Ferrari."
//SOBRE QUAL CARRO VOCÊ QUER PESQUISAR ???
const car = "Bugatti";//(Bugatti-Lamborgine-Tesla)
switch (car) {
    case "Bugatti":
        console.log(`Bugatti\n${sobreBugatti}`);
    break;
    case "Lamborgine":
        console.log(`Lamborgine:\n${sobreLamborgine}`);
    break;
    case "Tesla":
        console.log(`Tesla:\n${sobreTesla}`);
    break;
}