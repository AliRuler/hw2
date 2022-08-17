let number = 123456789;
let tedad_argham = 0;
while (number != 0) {
    number -= (number % 10)
    number /= 10;
    tedad_argham++;
}
console.log(tedad_argham);