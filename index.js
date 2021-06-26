// Your code here
function mapToNegativize(origArr) {
    const newArr = [];
    for(const elem of origArr) {
        newArr.push(elem * -1);
    };
    return newArr;
}

function mapToNoChange(origArr) {
    const newArr = [...origArr];
    return newArr;
}

function mapToDouble(origArr) {
    const newArr = [...origArr];
    for(let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i] * 2;
    }
    return newArr;
}

function mapToSquare(origArr) {
    const newArr = [...origArr];
    for(let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i] ** 2;
    }
    return newArr;
}


function reduceToTotal(origArr, startPt = 0) {
    let total = startPt;
    for(const elem of origArr) {
        total += elem;
    };
    return total;
}

function reduceToAllTrue(origArr) {
    let flag = true;
    for(const elem of origArr) {
        if (elem == false) {
            flag = false;
        };
    };
    return flag;
}

function reduceToAnyTrue(origArr) {
    let flag = false;
    for(const elem of origArr) {
        if (elem == true) {
            flag = true;
        };
    };
    return flag;
}