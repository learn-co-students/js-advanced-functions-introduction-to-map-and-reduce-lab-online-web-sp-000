const mapToNegativize = function(array){
    return array.map(x => x * -1)
}

const mapToNoChange = function(array){
    return array.map(x => x)
}

const mapToDouble = function(array){
    return array.map(x => x * 2)
}

const mapToSquare = function(array){
    return array.map(x => x ** 2)
}

const reduceToTotal = function(array, startingPoint = 0){
    return array.reduce(function(total, amount){
        if (startingPoint === 0){
            return total + amount
        }
        else {
            return total + amount + (startingPoint/2)
        }
    })
    
}

const reduceToAllTrue = function(array){
    return array.reduce(function(total, currentValue){
        if (currentValue){
            return true
        }
        else {
            return false
        }
    })
}

const reduceToAnyTrue = function(array){
    return array.reduce(function(total, currentValue){
        if (currentValue){
            return true
        }
        else {
            return false
        }
    })
}