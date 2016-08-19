function isPrime(num) {
    var isPrime = true;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

var number = 1999999;
var sum = 0;
while (number > 1) {
    if (isPrime(number)) {
        sum += number;
        console.log('Prime found: ' + number + ' Sum: ' + sum);
    }
    number -= 2;
}
console.log(sum);