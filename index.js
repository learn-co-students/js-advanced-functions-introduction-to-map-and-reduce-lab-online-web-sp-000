// Your code here

//map-like
function mapToNegativize(array){
  let newArray = [];
  for (let element of array){
    newArray.push(element - (element * 2));
    //wrong. assuming test is correct, solution provided above is better. newArray.push(-Math.abs(element));
  }
  
  return newArray;
}

function mapToNoChange(array){ return array;}

function mapToDouble(array){
  let newArray = [];
  for (let element of array){
    newArray.push(element * 2);
  }
  
  return newArray;
}

function mapToSquare(array){
  let newArray = [];
  for (let element of array){
    newArray.push(element * element);
  }
  
  return newArray;
}


//reduce-like
function reduceToTotal(array, total = 0){
  
  for (let element of array){
    total = total + element;
  }
  
  return total;
}

function reduceToAllTrue(array){
  for (let element of array){
    if (element == false){
      return false;
    }
  }
  
  return true;
}

function reduceToAnyTrue(array){
  for (let element of array){
    if (element == true){
      return true;
    }
  }
  
  return false;
}


