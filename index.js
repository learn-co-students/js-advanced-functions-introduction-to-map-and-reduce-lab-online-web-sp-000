// Your code here

const mapToNegativize = function(arr){
    let newArr = []
    arr.forEach(e => {
        newArr.push(e* -1)
    })
    return newArr
}
const mapToNoChange = function(arr){
    let newArr = []
    arr.forEach(e => {
        newArr.push(e)
    })
    return newArr
}
const mapToDouble = function(arr){
    let newArr = []
    arr.forEach(e => {
        newArr.push(e * 2)
    })
    return newArr
}
const mapToSquare = function(arr){
    let newArr = []
    arr.forEach(e => {
        newArr.push(e * e)
    })
    return newArr
}

console.log(mapToSquare([1,2,3]))

const reduceToTotal = function(arr, start = 0){
    arr.forEach(e => {
        start += e
    })
    return start
}
const reduceToAllTrue = function(arr){
    let result = true
    arr.forEach(e => {
        if (e === false) result = false
    })
    return result
}

const reduceToAnyTrue = function(arr){
    let result = false
    arr.forEach(e => {
        if (e === true) result = true
    })
    return result
}

console.log(reduceToTotal([1,2,3],0))
console.log(reduceToAllTrue([false,2,3]))
console.log(reduceToAnyTrue([false,true,3]))
