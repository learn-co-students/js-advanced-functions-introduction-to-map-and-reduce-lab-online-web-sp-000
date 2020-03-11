function mapToNegativize(sourceArray) {
    return sourceArray.map(function(num) {
        return num * -1
    })
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(function(num) {
        return num 
    })
}

function mapToDouble(sourceArray) {
    return sourceArray.map(function(num) {
        return num * 2
    })
}

function mapToSquare(sourceArray) {
    return sourceArray.map(function(num) {
        return num * num
    })
}

const reduceToTotal = (sourceArray, startingPoint=0) => {
    let total = startingPoint
    for(let num of sourceArray){
        total = total + num 
    }
    return total
}

const reduceToAllTrue = (sourceArray) => {
    let value = true 
    for(let item of sourceArray){
        if (item === false){
            value = false 
        }
    }
    return value 
}

const reduceToAnyTrue = (sourceArray) => {
    let value = false 
    for(let item of sourceArray){
        if (item === true){
            value = true 
        }
    }
    return value 
}