let stroka = '';

for (let k = 0; k < 8; ++k){
    for (let m = 0; m < 8; ++m) {
        if ((k + m) % 2 == 0) {
            stroka += ' ';
        } else {
            stroka += '#';
        }

    }
    stroka += '\n';
}
console.log(stroka);