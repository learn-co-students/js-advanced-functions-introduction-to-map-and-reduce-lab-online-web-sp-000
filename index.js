// Your code here

function mapToNegativize(sourceArray) {
    const map1 = sourceArray.map(x => x * -1);
    return map1
}

function mapToNoChange(sourceArray) {
    const map2 = sourceArray.map(x => x );
    return map2
}

function mapToDouble(sourceArray) {
    const map3 = sourceArray.map(x => x * 2 );
    return map3
}

function mapToSquare(sourceArray) {
    const map4 = sourceArray.map(x => x ** 2 );
    return map4
}

function reduceToTotal(sourceArray, start = 0) {
    let total = start
    for (let i = 0; i < sourceArray.length; i++){
        total += sourceArray[i]
    }

    return total
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0 ; i < sourceArray.length; i++){
        if (sourceArray[i]===false){
            return false
        }
    }

    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0 ; i < sourceArray.length; i++){
        if (sourceArray[i]===true){
            return true
        }
    }

    return false
}

