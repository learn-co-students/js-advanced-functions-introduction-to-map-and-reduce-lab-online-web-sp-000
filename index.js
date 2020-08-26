// Your code here
function mapToNegativize(array) { 
    let arrayTwo = [];
    for (let i = 0; i < array.length; i++) {
        arrayTwo.push(array[i] * -1);
    }
    return arrayTwo;
}

function mapToNoChange(array) { 
    let arrayTwo = [];
    for (let i = 0; i < array.length; i++) {
        arrayTwo.push(array[i] * -1);
    }
    return array;
}

function mapToDouble(array) { 
    let arrayTwo = [];
    for (let i = 0; i < array.length; i++) {
        arrayTwo.push(array[i] * 2);
    }
    return arrayTwo;
}

function mapToSquare(array) { 
    let arrayTwo = [];
    for (let i = 0; i < array.length; i++) {
        arrayTwo.push(array[i] ** 2);
    }
    return arrayTwo;
}

function reduceToTotal(array, start=0) { 
    let total = start;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total;
}

function reduceToAllTrue(array) { 
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false;
    }
    return true;
}

function reduceToAnyTrue(array) { 
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true;
    }
    return false;
}