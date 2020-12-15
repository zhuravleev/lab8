let a = +prompt("a =");
let b = +prompt("b =");
let c = +prompt("c =");
let k = 0;

if (a > b) {
    k = a;
    a = b;
    b = k;
}
if (a > c) {
    k = a;
    a = c; 
    c = k; 
}
if (b > c) {
    k = b; 
    b = c; 
    c = k; 
}

console.log(a + ' ' + b + ' ' + c);