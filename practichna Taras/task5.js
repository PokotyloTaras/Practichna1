function GeneratingArray(length, min, max){
    let arr = []
    for (let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(random);
    }
    return arr;
}


function changeLoc(arr1){
    let arrCopy = [...arr1]
    let min = 0;
    let max = 0;

    for (let i = 0; i < arrCopy.length; i++){
        if (arrCopy[i] < arrCopy[min]){
            min = i;
        }
        if (arrCopy[i] > arrCopy[max]){
            max = i;
        }
    }
    let temp = arrCopy[min];
    arrCopy[min] = arrCopy[max];
    arrCopy[max] = temp;

    return arrCopy;
}
const originalArr = GeneratingArray(12, 3, 66)
const five = changeLoc(originalArr);
console.log(originalArr)
console.log(five)