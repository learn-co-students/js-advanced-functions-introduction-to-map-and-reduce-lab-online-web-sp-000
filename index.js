// Your code here
function mapToNegativize(x) {
    let result = [];
    for (let n of x) {
        let update = n * -1
        result.push(update);
    }
    return result;
}

function mapToNoChange(x) {
    // let result = [];
    // for (let n of x) {
    //     let update = n * -1
    //     result.push(update);
    // }
    return x;
}

function mapToDouble(x) {
    let result = [];
    for (let n of x) {
        let update = n * 2;
        result.push(update);
    }
    return result;
}

function mapToSquare(x) {
    let result = [];
    for (let n of x) {
        let update = n * n;
        result.push(update);
    }
    return result;
}

function reduceToTotal(x, result = 0) {
    // let result = 0;
    for (let n of x) {
        result += n;
    }
    return result;
}

function reduceToAllTrue(x) {
    let result = true;
    for (let n of x) {
        if (!n) {
            result = false;
        }
    }
    return result;
}

function reduceToAnyTrue(x) {
    let result = false;
    for (let n of x) {
        if (n) {
            result = true;
        }
    }
    return result;
}