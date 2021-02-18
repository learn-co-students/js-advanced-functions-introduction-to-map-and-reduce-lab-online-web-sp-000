// Your code here
function mapToNegativize(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= -1;
    }
    return array;
}

function mapToNoChange(array) {
    return array;
}

function mapToDouble(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

function mapToSquare(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i]**2;
    }
    return array;
}

function reduceToTotal(array, total=0) {
    for (const el of array) {
        total += el;
    }
    return total;
}

function reduceToAllTrue(array) {
    for (const el of array) {
        if (!el) {
            return false;
        }
    }
    return true;
}

function reduceToAnyTrue(array) {
    for (const el of array) {
        if (el) {
            return true;
        }
    }
    return false;
}