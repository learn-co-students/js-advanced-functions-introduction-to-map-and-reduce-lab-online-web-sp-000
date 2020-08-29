// Your code here

function mapToNegativize(array){
  const results = [];
  for (const n of array)
    results.push(n*-1);
  return results;
}

function mapToNoChange(array){
  const results = [];
  for (const n of array)
    results.push(n);
  return results;
}

function mapToDouble(array){
  const results = [];
  for (const n of array)
    results.push(n*2);
  return results;
}

function mapToSquare(array){
  const results = [];
  for (const n of array)
    results.push(n*n);
  return results;
}

function reduceToTotal(array, p=0){
  let sum = p;
  for (const n of array)
    sum += n;
  return sum;
}

function reduceToAllTrue(array){
  // return array.reduce((previous=1, current) => current ? previous : previous = 0) == true;

  for (const v of array)
    if (!v)
      return false;
  return true;
}

function reduceToAnyTrue(array){
  // return array.reduce((previous=0, current) => current ? previous=1 : previous ) == true;

  for (const v of array)
    if (v)
      return true;
  return false;
}
