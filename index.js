// Your code here

const mapToNegativize = (arr) => {
    const neg = []
    arr.forEach(num => {
        neg.push(num * -1)
    })
    return neg
}

const mapToNoChange = (arr) => {
    const newArr = []
    arr.forEach(num => {
        newArr.push(num)
    })
    return newArr
}

const mapToDouble = (arr) => {
    const dob = []
    arr.forEach(num => {
        dob.push(num * 2)
    })
    return dob
}

const mapToSquare = (arr) => {
    const sqr = []
    arr.forEach(num => {
        sqr.push(num ** 2)
    })
    return sqr
}

const reduceToTotal = (arr, startVal = 0) => {
    let total = startVal
    arr.forEach(num => {
        total += num
    })
    return total
}

const reduceToAllTrue = (arr) => {
    let any
    arr.forEach(item => {
        if (!item) {
            any = true
        }
    })

    if (any) {
        return false
    } else {
        return true
    }
}

const reduceToAnyTrue = (arr) => {
    let any
    arr.forEach(item => {
        if (item) {
            any = true
        }
    })

    if (any) {
        return true
    } else {
        return false
    }
}