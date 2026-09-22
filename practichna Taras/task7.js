function GeneratingArray(length, min, max){
    let arr = []
    for (let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(random);
    }
    return arr;
}
// масиви-----------------

let arr1 = GeneratingArray(13, 1, 3)
console.log(arr1);

//------------------------

function removeDuplicates(arr){
const minValue = Math.min(...arr);
const maxValue = Math.max(...arr);

    let min = false;
    let max = false;

return arr.filter(num => {
    if (num === minValue){
        if (!min){
            min = true
            return min
        }
        return false
    }
    if (num === maxValue){
        if (!max){
            max = true
            return max
        }
        return false
    }
    return true
});
}

let result = removeDuplicates(arr1);
console.log(result)