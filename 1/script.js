let number = +prompt("Chislo ovechek");
let stroka = "";

for (let k = 1; k <= number; ++k) {
    stroka += `${k} овечка...`;
}

console.log(stroka); 