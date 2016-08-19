

/*function increment() {
    numbers[]
}*/

function isPythagorean(numbers) {
    return Math.pow(numbers[0],2) + Math.pow(numbers[1],2) === Math.pow(numbers[2],2);
}

var numbers = [1, 2, 997];
var startOfRound = [1, 2, 997];
function increment() {
    numbers[1]++;
    numbers[2]--;
    if (numbers[1] >= numbers[2]) {
        numbers = startOfRound;
        numbers[0]++;
        numbers[1]++;
        numbers[2] -= 2;
        startOfRound = [numbers[0], numbers[1], numbers[2]];
    }
    console.log(numbers);
}

while (true) {
    if (numbers[0] < numbers[1] && numbers[1] < numbers[2] && isPythagorean(numbers)) {
        if (numbers[0] + numbers[1] + numbers[2] === 1000) {
            console.log(numbers);
            break;
        }
    }
    increment();
}