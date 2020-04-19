function numb(integer) {
    let numbArr = [];
    let result = [];
    for(let index = 1; index <= integer; index++) {
        numbArr.push(index);
    }
    for(let index = 0; index < numbArr.length; index++) {
        if(numbArr[index] % 2 == 0 && numbArr[index] % 3 == 0 && numbArr[index] % 5 == 0) {
            result.push('yu-gi-oh');
        } else if(numbArr[index] % 2 == 0 && numbArr[index] % 3 == 0) {
            result.push('yu-gi');
        } else if(numbArr[index] % 2 == 0 && numbArr[index] % 5 == 0) {
            result.push('yu-oh')
        } else if(numbArr[index] % 3 == 0 && numbArr[index] % 5 == 0) {
            result.push('gi-oh');
        } else if(numbArr[index] % 2 == 0) {
            result.push('yu');
        } else if(numbArr[index] % 3 == 0) {
            result.push('gi');
        } else if(numbArr[index] % 5 == 0) {
            result.push('oh');
        } else {
            result.push(index+1);
        }
    }
    return result;
}
console.log(numb(100));
console.log(numb(77));