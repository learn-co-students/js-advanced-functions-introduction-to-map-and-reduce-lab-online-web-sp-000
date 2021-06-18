function mapToNegativize(array){
    let newArray = [];
    for(let num of array){
        newArray.push(num * -1);
    }
    return newArray
}
mapToNegativize([1, 2, 3, -9])

function mapToNoChange(array){
    let newArray = [];
    for(let name of array){
        newArray.push(name);
    }
    return newArray
}
mapToNoChange(["paul", "gurney", "vladimir", "jessica", "chani"])

function mapToDouble(array){
    let newArray = [];
    for(let num of array){
        newArray.push(num * 2);
    }
    return newArray
}
mapToDoube([1, 2, 3, -9])

function mapToSquare(array){
    let newArray = [];
    for(let num of array){
        newArray.push(num * num);
    }
    return newArray
}
mapToSquare([1, 2, 3, -9])

function reduceToTotal(array, num){
    if(num){
      for(let n of array){
          num += n;
      }
      return num
    } else {
      let sum = 0;
      for(let nu of array){
        sum += nu;
      }
      return sum;
    }
  }
  reduceToTotal([1,2,3], 100)

function reduceToAllTrue(array){
    let march = true;
    for(let value of array){
        march = !!value;
    }
    return march;
}
reduceToAllTrue([1, 2, true, "razmatazz", false])

function reduceToAnyTrue(array){
    let march = true;
    for(let value of array){
        march = !!value;
        if (march === true){
          return true;
        }
    }
    return march;
}
reduceToAnyTrue([false, false, false, false])