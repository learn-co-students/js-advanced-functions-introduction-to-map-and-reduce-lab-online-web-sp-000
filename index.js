function mapToNegativize(arr) {
    return arr.map(x => x * -1);
}

function mapToNoChange(noChangeArray) {
    return noChangeArray.map(x => x);
}

function mapToDouble(doubleArray) {
    return doubleArray.map(x => x * 2);
}

function mapToSquare(squareArray) {
    return squareArray.map(x => x ** 2);
}

function reduceToTotal(reduceArray, startingPoint = 0) {
    const reduceTotal = function(result1, result2){
return result1 + result2
    }
    return reduceArray.reduce(reduceTotal, startingPoint)
}



function reduceToAllTrue(allArray){

    const reduceAllArray = function(array1, currentArray){  
        if(!!array1 == true && !!currentArray == true){
            return true;
        } else {
            return false;
        }
    }
    return allArray.reduce(reduceAllArray, true)
}

function reduceToAnyTrue(trueArray) {
const reduceArray = function(reduce1, reduce2) {
    if(reduce1 == true){
        return true
    }else {
        return !!reduce2
    }
}
return trueArray.reduce(reduceArray, false)
}