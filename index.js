// Your code here
function mapToNegativize(array) {
    return array.map(element => element *-1);
}

function mapToNoChange(array) {
    return array.map(element => element);
}

function mapToDouble(array) {
    return array.map(element => element * 2);
}

function mapToSquare(array) {
    return array.map(element => element ** 2);
}

function reduceToTotal(array, startingPoint = 0) {
    return array.reduce((sum,element) => sum + element, startingPoint);
}

function reduceToAllTrue(array){
    return array.reduce((total, element) => !!total && !!element);
}

function reduceToAnyTrue(array) {
    return array.reduce((total,element) => !!total || !!element );
}