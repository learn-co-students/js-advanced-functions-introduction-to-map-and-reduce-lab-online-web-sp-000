// Your code here
function mapToNegativize(nums) {
    let n = []
    for (let i = 0; i < nums.length; i++) {
        n.push(-1 * nums[i])
    }
    return n
}

function mapToNoChange(nums) { 
    let n = []
    for (let i = 0; i < nums.length; i++) {
        n.push(nums[i])
    }
    return n
}

function mapToDouble(nums) {
    let n = []
    for (let i = 0; i < nums.length; i++) {
        n.push(2 * nums[i])
    }
    return n
}

function mapToSquare(nums) { 
    let n = []
    for (let i = 0; i < nums.length; i++) {
        n.push(nums[i] * nums[i])
    }
    return n
}

function reduceToTotal(nums, startingPoint=0) {
    let total = startingPoint 
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i]   
    }
    return total
}

function reduceToAllTrue(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (!nums[i]) return false
    }
    return true
}

function reduceToAnyTrue(nums) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i]) return true
    }
    return false
}