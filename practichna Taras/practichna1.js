function GeneratingArray(length, min, max){
    let arr = []
    for (let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(random);
    }
    return arr;
}

// масиви-----------------

let arr1 = GeneratingArray(4, 3, 46)
console.log(arr1);



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

