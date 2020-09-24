function mapToNegativize(sourceArray) {
  let result = [];
  for (const item of sourceArray) {
    result.push(item * -1);
  }
  return result;
}

function mapToNoChange(sourceArray) {
  let result = [];
  for (const item of sourceArray) {
    result.push(item);
  }
  return result;
}

function mapToDouble(sourceArray) {
  let result = [];
  for (const item of sourceArray) {
    result.push(item * 2);
  }
  return result;
}

function mapToSquare(sourceArray) {
  let result = [];
  for (const item of sourceArray) {
    result.push(item **2);
  }
  return result;
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let result = startingPoint;
  for (const item of sourceArray) {
    result += item;
  }
  return result;
}

function reduceToAllTrue(sourceArray) {
  let result = true;
  for (const item of sourceArray) {
    if (!item == true) {
      result = false;
    }
  }
  return result;
}

function reduceToAnyTrue(sourceArray) {
  let result = false;
  for (const item of sourceArray) {
    if (item) {
      result = true;
    }
  }
  return result;
}
