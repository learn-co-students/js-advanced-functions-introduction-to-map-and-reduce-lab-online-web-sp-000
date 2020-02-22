// Your code here

function mapToNegativize(array){
    let newArray = []

    array.forEach(function(element){
        newArray.push(element * -1)
    })

    return newArray
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){

    let newArray = []

    array.forEach(function(element){
        newArray.push(element * 2)
    })

    return newArray
}

function mapToSquare(array){
    let newArray = []

    array.forEach(function(element){
        newArray.push(element * element)
    })

    return newArray
}

function reduceToTotal(array, startingPoint){
    if (startingPoint){
        let number = startingPoint
        for (let i = 0; i < array.length; i++){
            number += array[i]
        }
        
        return number
    } else {
        let number = 0
        array.forEach(function(x){
            number += x
        })

        return number
    }
}

function reduceToAllTrue(array){

    let truth = 0
    let falsey = 0

    array.forEach(function(element){
        if (element){
            truth += 1
        } else {
            falsey += 1
        }
    })

    if (falsey === 0) {
        return true
    } else {
        return false
    }
}

function reduceToAnyTrue(array){
    let truth = 0
    let falsey = 0

    array.forEach(function(element){
        if (element){
            truth += 1
        } else {
            falsey += 1
        }
    })

    if (truth === 0) {
        return false
    } else {
        return true
    }
}