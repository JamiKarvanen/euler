function generateChain(startNumber) {
    var cur = startNumber;
    var length = 0;
    while (cur !== 1) {
        if (cur % 2 === 0) {
            cur = cur / 2;
        } else {
            cur = (3 * cur) + 1;
        }
        length++;
    }
    return length;
}

var maxLength = 0;
var maxIdx;
for (var i = 1, len = 1000000; i <= len; i++) {
    var length = generateChain(i);
    if (length > maxLength) {
        maxLength = length;
        maxIdx = i;
    }
}
