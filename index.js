// Your code here
function mapToNegativize(arr){
    let nuArr = []
    for(let i = 0; i <arr.length; i++){
        nuArr.push(arr[i] * -1)
    }
    return nuArr
}
function mapToNoChange(arr){
    let nuArr = []
    for(let i = 0; i <arr.length; i++){
        nuArr.push(arr[i])
    }
    return nuArr
}
function mapToDouble(arr){
    let nuArr = []
    for(let i = 0; i <arr.length; i++){
        nuArr.push(2 * arr[i])
    }
    return nuArr
}
function mapToSquare(arr){
    let nuArr = []
    for(let i = 0; i <arr.length; i++){
        nuArr.push(arr[i] * arr[i])
    }
    return nuArr
}

function reduceToTotal(arr, start = 0){
    let total = start;
    for(let i = 0; i <arr.length; i++){
        total = total+ arr[i]
    }
    return total
}
function reduceToAllTrue(arr){
    for(let i = 0; i <arr.length; i++){
        if (!arr[i]){
            return false
        }
    }
    return true
}
function reduceToAnyTrue(arr){
    for(let i = 0; i <arr.length; i++){
        if (arr[i] == true){
            return true
        }
    }
    return false
}