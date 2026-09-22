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
console.log(arr1);



//------------------------
// завдання 2
console.log(`завдання 2---------------------`)
function middle(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    const average = sum / arr.length
    return {sum, average};
}
const res = middle(arr1)
console.log(`сума ${res.sum}`)
console.log(`середнє арифметичне: ${res.average}` );