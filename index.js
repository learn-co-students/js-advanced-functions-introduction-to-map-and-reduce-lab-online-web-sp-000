// Your code here






function mapToNegativize(nums){
    const negativeNums = []
    for (let i = 0; i < nums.length; i++) {
        // if (nums[i] > 0){
         let num = nums[i] = -nums[i]
         negativeNums.push(num)
        // } else{
        //     negativeNums.push(nums[i])
        // }
      }
      return negativeNums
}

function mapToNoChange(nums){
   return nums
}

function mapToDouble(nums){
    const dobleNum = []
    for (let i = 0; i < nums.length; i++) {
         let num = nums[i] = nums[i] * 2
         dobleNum.push(num)
      }
      return dobleNum
}

function mapToSquare(nums){
    const toSquare = []
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] = nums[i] * nums[i]
        toSquare.push(num)
     }
     return toSquare
}

function reduceToTotal(nums,startingPoint = 0){
     let total = startingPoint
     for (let i = 0; i < nums.length; i++) {
        total += nums[i] 
      }
      
      return total
}

function reduceToAllTrue(values){
    let falsy = true
    for (let i = 0; i < values.length; i++) {
        if (!values[i]){
           falsy = false
        }
     }
     if (falsy){
        return true
     }else{
        return false
     }
}

function reduceToAnyTrue(values){
    let truethy = false
    for (let i = 0; i < values.length; i++) {
        if (values[i]){
           truethy = true
        }
     }
     if (truethy){
        return true
     }else{
        return false
     }
}