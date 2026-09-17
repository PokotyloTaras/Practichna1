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
let arr3 = GeneratingArray(16, 5, 66)
console.log(arr1);
console.log(arr2);
console.log(arr3);


//------------------------
// завдання 1
console.log(`завдання 1---------------------`)
function matematik(arr, startIndex, endIndex){
    let count = 0;
    let sum = 0;

    const start = Math.max(0, startIndex);
    const end = Math.min(arr1.length - 1, endIndex);

    for (let i = start; i <= end; i++){
        if (arr[i] % 2 === 0){
            sum += arr[i]
            count++;
        }
    } 

    return{count, sum};
};

let result = matematik(arr1, 0, arr1.length - 1);
console.log("Кількість парних:", result.count);
console.log("Сума парних:", result.sum);

// завдання 2
console.log(`завдання 2---------------------`)
function middle(arr){
    let suma = 0;

    for (let i = 0; i < arr.length; i++){
        suma += arr[i];
    }
    const average = suma / arr.length
    return {suma, average};
}
const res = middle(arr1)
console.log(`сума ${res.suma}`)
console.log(`середнє арифметичне: ${res.average}` );

//завдання 3
console.log(`завдання 3---------------------`)
function CreateThirdArray(arr1, arr2){
    let arr3 = [];
    let minLength = Math.min(arr1.length, arr2.length);
    for(let i = 0; i < minLength; i++){
        arr3.push(arr1[i] += arr2[i]);
    }
    return arr3;
}
const third = CreateThirdArray(arr1, arr2)
console.log(third)

console.log(`завдання 4---------------------`)
function concatenation (){
    
}
