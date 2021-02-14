// Your code here
function mapToNegativize(array)
{
  for(let i=0; i<array.length; i++)
  {
    array[i]*=-1;
  }
  return array;
}
function mapToNoChange(array)
{
  return array;
}
function mapToDouble(array)
{
  for(let i=0; i<array.length; i++)
  {
    array[i]*=2;
  }
  return array;
}
function mapToSquare(array)
{
  for(let i=0; i<array.length; i++)
  {
    array[i]*=array[i];
  }
  return array;
}

function reduceToTotal(sourceArray, startingPoint=0)
{
  let out  = 0;
  for(let i=0; i<sourceArray.length; i++)
  {
    out+=sourceArray[i];
  }
  return out+startingPoint;
}
function reduceToAllTrue(sourceArray)
{
  let out  = true;
  for(let i=0; i<sourceArray.length; i++)
  {
    if(!sourceArray[i])
    {
      out = false;
    }
  }
  return out;
}
function reduceToAnyTrue(sourceArray)
{
  let out  = false;
  for(let i=0; i<sourceArray.length; i++)
  {
    if(sourceArray[i])
    {
      out = true;
    }
  }
  return out;
}
