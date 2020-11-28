// Your code here
function mapToNegativize(sourceArray){
    let negtiveArray = []
    for(const i of sourceArray){
        negtiveArray.push(i*(-1))
    }

    return negtiveArray
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    let doubleArray = []
    for(const i of sourceArray){
        doubleArray.push(i*2)
    }
    return doubleArray
}

function mapToSquare(sourceArray){
    let squareArray = []
    for(const i of sourceArray){
        squareArray.push(Math.pow(i,2))
    }
    return squareArray
}

function reduceToTotal(sourceArray, startingPoint){
    let a = (startingPoint? startingPoint : 0)
    for(const i of sourceArray){
        a = a + i
    }
    return a
}

function reduceToAllTrue(sourceArray){

    for(const i of sourceArray){
        if (!i){
            return false
        }
    }

    return true
}
function reduceToAnyTrue(sourceArray){
    for(const i of sourceArray){
        if(i){
            return true
        }
    }
    return false
}