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
let arr2 = GeneratingArray(12, 5, 66)
console.log(arr1);

//------------------------
//завдання 3
console.log(`завдання 3---------------------`)
function CreateThirdArray(arr1, arr2){
    let array = [];
    let minLength = Math.min(arr1.length, arr2.length);
    for(let i = 0; i < minLength; i++){
        array.push(arr1[i] += arr2[i]);
    }
    return array;
}
const third = CreateThirdArray(arr1, arr2)
console.log(third)