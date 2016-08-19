


function calculateFactors(value) {
   /* var count = 0;
    for (var i = 1; i <= value; i++) {
        if (value % i === 0) {
            count++;
        }
    }*/
    var cur = 1;
    var count = -2;
    var smallestUpper = value;
    while (true) {
        if (value % cur === 0) {
            count += 2;
            smallestUpper = value / cur;
        }
        cur++;
        if (cur > smallestUpper) {
            break;
        }
    }
    return count;
}

var index = 1;
var maxFactors = 0;
var lastValue;
while (true) {
    var curValue = lastValue ? lastValue + index : index;
    var factors = calculateFactors(curValue);
    if (factors > maxFactors) {
        maxFactors = factors;
        console.log('New max is: ' + factors + ' at index ' + index);
    }
    if (factors > 500) {
        console.log(curValue);
        break;
    }
    lastValue = curValue;
    index++;
}

//console.log(calculateFactors(triangle(7)));
