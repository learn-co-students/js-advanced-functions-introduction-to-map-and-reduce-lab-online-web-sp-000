// Your code here
function mapToNegativize(sourceArray){
    let x = []
     let y;
    for (y of sourceArray) {
        x.push(y * -1)
    }
    return x
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    let x = []
    let y;
    for(y of sourceArray){
        x.push(y *2)
    }
    return x
}

function mapToSquare(sourceArray){
    let x = []
    let y;
    for(y of sourceArray){
        x.push(y * y)
    }
    return x
}

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint
    let y;
    for(y of sourceArray){
        total += y
    }
    return total
}

function reduceToAllTrue(sourceArray){
    let y;
    for (y of sourceArray){
        if (!y)
        return false
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    let y;
    for (y of sourceArray){
        if (y)
        return true
    }
    return false
}


