//====== ====== FALSE ====== ====== 
const x = "";//String vazia é FALSE
const y = 0;//String 0(zero) é FALSE
const n = null;//String nula é FALSE
const u = undefined;//String indefinida é FALSE
console.log(!!u);
console.log(!!x);
console.log(!!y);
console.log(!!n);

console.log("")

//====== ======TRUE ====== ====== 
const list = [];//Uma List vazia é TRUE
const obj = {};//Um Object vazio é TRUE
console.log(!!list);
console.log(!!obj);
// Por List e Object serem TRUE, deve-se colocar 
// .length no if para para saber seu valor interno
if(list.length === 0) {
    console.log(list);
}

console.log("");

//====== ====== BOLEANOS ====== ======
// !! - checa o Truhty or Falsy
// ! - Inverte qualquer boleano
const lista = [];//Uma List vazia é TRUE
console.log(!lista);// ! - Inverte qualquer boleano
