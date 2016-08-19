var longNumber = [1];
function incrementArray() {
    var curIndex = 0;
    longNumber[curIndex]++;
    while (curIndex < longNumber.length) {
        if (longNumber[curIndex] === 10) {
	       longNumber[curIndex] = 0;
            if (curIndex === longNumber.length - 1) {
                longNumber.push(1);
                break;
            } else {
                longNumber[curIndex + 1]++;
            }
	    }
        curIndex++;
    }
    console.log(longNumber);
}

function findProduct(start, finish) {
    var product = 0;
    for (var i = start; i <= finish; i++) {
        product *= longNumber[i]; 
    }
    return product;
}

function findLargestProduct() {
    var offset = 0;
    var maxProduct = 0;

    while (offset <= 987) {
        var product = findProduct(offset, offset + 12);
	if (product > maxProduct) {
	    maxProduct = product;
	}
	offset++;
    }
    return maxProduct;
}

while(longNumber.length < 1000) {
    incrementArray();
}

var largestProduct = 0;
while(longNumber[999] < 9) {
    incrementArray();
    var product = findLargestProduct();
    if (product > largestProduct) {
        largestProduct = product;
    }
}
console.log("Largest product of 13 adjacent numbers in a 1000 digit number is: " + largestProduct);
