// strings
const firstName = 'Alexsandro'
const lastName = 'Simas Lopes'
const sextaFeira = 'sextooou'
const segundaFeira = 'SEGUNDOU'
const helpMe = 'socorrooo!'
//CHAMAR STRING
console.log('Meu nome é ' + firstName + ' ' + lastName); //Forma antiga
console.log(`Meu nome é ${firstName} ${lastName}`);//Forma mais fácio usando: 2 acentos agudos`` e chaves {}
/** LISTAGEM
const names = "Felipe,João,Júlia,Rafaella";//Listagem com "split"
console.log(names.split(","));//Se não por virgula ele soletra cada letra
console.log(names.split(""));//Se por virgula ele monta em tabela
*/
/** MAIUSCULO ou MINÚSCULO
console.log(`${sextaFeira.toUpperCase()} genteeee!`);//toUpperCase():Deixa a letra Maiuscula
console.log(`${segundaFeira.toLowerCase()} de novo`);//toLowerCase():Deixa a letra Minúscula
console.log(`${helpMe.toUpperCase()}`);//exemplo =)
*/
/** NÚMEROS
const number = 5;
console.log(number);
console.log(typeof number.toString())
*/
/**BOOLEANOS
false
true
console.log(2 == 2)//true
console.log(2 == 3)//false
**/ 
/** NULL & UNDEFINED
const x = null; // Variavel sem valor/vazio
const y = undefined; //Variavel indefinida 
*/

console.log("\nRevisando")

const primeiroNome = 'Flávio'
const nomeDoMeio1 = 'Alison'
const nomeDoMeio2 = 'Simas'
const ultimoNome = 'Lopes'
const anosIdade = 26
const from = 'amazônas'
const cit = 'Manaus'
const viagens = "Portugal e Espanha"

console.log(`Meu nome é:
${primeiroNome.toUpperCase()} ${nomeDoMeio1.charAt()} ${nomeDoMeio2.replace()} ${ultimoNome}, 
tenho ${anosIdade} anos de idade
e ultimamento estou morando 
no ${from} na cidade de ${cit} 
Viagei para ${viagens.split()} 
para apresentar trabalhos`)




