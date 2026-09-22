function GeneratingArray(length, min, max){
    let arr = []
    for (let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(random);
    }
    return arr;
}

// масиви-----------------

let arr1 = GeneratingArray(12, 3, 46)
let arr2 = GeneratingArray(15, 3, 46)
console.log(arr1);
console.log(arr2);


//------------------------
console.log(`завдання 4---------------------`)
function concatenation(array1, array2){
    return[...array1, ...array2];
}
const fourth = concatenation(arr1, arr2)
console.log(fourth)