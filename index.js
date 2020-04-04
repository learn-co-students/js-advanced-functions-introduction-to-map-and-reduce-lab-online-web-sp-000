// Your code here

function mapToNegativize(arr){
    let newArray = []
    arr.forEach(element => {
       newArray.push(negative(element))
    });
   return newArray
}

function negative(num){
    if (num < 0){
       return Math.abs(num)
    }
    else {
       return num * -1
    }
}


function mapToNoChange(arr){
    return arr 
}

function mapToDouble(arr){
    let doubles = []
    arr.forEach(element => {
       doubles.push(element * 2)
    })
    return doubles
}

function mapToSquare(arr){
    let squares = []
    arr.forEach(element => {
        squares.push(Math.pow(element, 2))
    })
    return squares
}

function reduceToTotal(arr, startPoint = 0){

        arr.forEach(element => {
            startPoint += element
        })
   
    return startPoint
 
}

function reduceToAllTrue(arr){

    let i;

    for (i = 0; i < arr.length; i++){
        if (arr[i] == false){
            return false
        } 
    }
        return true

}


function trueOrfalse(element){
    if (element == true){
        return true 
    }
    
}

function reduceToAnyTrue(arr){

    let i;

    for (i = 0; i < arr.length; i++){
        if (arr[i] == true){
            return true 
        }
    }
        return false

}