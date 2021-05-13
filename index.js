// Your code here

function mapToNegativize(array) { 
    let new_array = []
    for (let i = 0; i < array.length; i++) {
        new_array.push(array[i] * -1) 
      }
      return new_array
}

function mapToNoChange(array) { 
    let unchanged_array = [] 
    for (let i = 0; i < array.length; i++) { 
        unchanged_array.push(array[i])
    }
    return unchanged_array
}

function mapToDouble(array) { 
    let doubled_array = [] 
    for (let i = 0; i < array.length; i++) { 
        doubled_array.push(array[i] * 2)
    }
    return doubled_array
}

function mapToSquare(array) { 
    let squared_array = []
    for (let i = 0; i < array.length; i++) { 
        squared_array.push(array[i] * array[i])
    }
    return squared_array
}

function reduceToTotal(array, startingPoint=0) { 
    let total = startingPoint
for (let i = 0; i < array.length; i++) { 
    total += array[i]
}
return total
}

function reduceToAllTrue(array) { 
    for (let i = 0; i < array.length; i++) { 
        if (Boolean(array[i]) === false) { 
            return false 
        }
    }
    return true  
}

function reduceToAnyTrue(array) { 
    for (let i = 0; i < array.length; i++) { 
        if (Boolean(array[i]) === true) {
        return true
        }
    }
    return false
}