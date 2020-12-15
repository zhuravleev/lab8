let count = +prompt("Введите количество чисел")
let max = 0; 

for (i = 1; i <= count; ++i) {
    k = +prompt(`Введите число №${i}`);
    if (k >= max) {
        max = k;
    }
}
console.log(max); 