function mapToNegativize(array) {
  for(const point in array) {
    array[point]*= -1;
  }
  return array
}

function mapToNoChange(array) {
  return array
}

function mapToDouble(array) {
  for(const point in array) {
    array[point] *= 2;
  }
  return array
}

function mapToSquare(array) {
  for(const point in array) {
    array[point] **= 2;
  }
  return array
}

function reduceToTotal(array, startingPoint = 0) {
  for(const value of array) {
    startingPoint += value;
  }
  return startingPoint;
}

function reduceToAllTrue(array) {
  for(const value of array) {
    if(!value) { return false; }
  }
  return true;
}

function reduceToAnyTrue(array) {
  for(const value of array) {
    if(value) { return true; }
  }
  return false;
}