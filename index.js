// Your code here

function mapToNegativize(arr) {
    let arr1 = [];
    for (const a in arr) {
        arr1.push(arr[a] * -1)
    }
    return arr1
}
function mapToNoChange(arr) {
    let arr1 = [];
    for (const a in arr) {
        arr1.push(arr[a])
    }
    return arr1
}
function mapToDouble(arr) {
    let arr1 = [];
    for (const a in arr) {
        arr1.push(arr[a] * 2)
    }
    return arr1
}
function mapToSquare(arr) {
    let arr1 = [];
    for (const a in arr) {
        arr1.push(arr[a] ** 2)
    }
    return arr1
}



function reduceToTotal(arr, start=0) {
    for (const a in arr) {
        start = start + arr[a]
    }
    return start
}
function reduceToAllTrue(arr) {
    for (const a in arr) {
       if (arr[a] == false) {
        return false
       } 
    }
    return true
}
function reduceToAnyTrue(arr) {
    for (const a in arr) {
        if (arr[a]){
         return true
        } 
     }
     return false
}
