// Your code here
function mapToNegativize(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * -1)
    }
    return newArr
}

function mapToNoChange(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i])
    }
    return newArr
}

function mapToDouble(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2)
    }
    return newArr
}

function mapToSquare(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i] ** 2)
    }
    return newArr
}

function reduceToTotal(arr, start = 0){
    let total = start;
    for (let i = 0; i < arr.length; i++){
        total = total + arr[i]
    }
    return total
}

function reduceToAllTrue(arr){
    for (let i = 0; i < arr.length; i++){
        if(!arr[i]){
            return false
        }
    }
    return true
}

function reduceToAnyTrue(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === true){
            return true
        }
    }
    return false

}