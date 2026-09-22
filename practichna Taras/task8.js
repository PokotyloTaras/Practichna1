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
let arr2 = GeneratingArray(12, 3, 46)
console.log(arr1);
console.log(arr2);

//------------------------

function middle(arr1, arr2){
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr1.length; i++){
        sum1 += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++){
        sum2 += arr2[i];
    }
    let average2 = sum2 / arr2.length
    let average1 = sum1 / arr1.length

    let lower = average1 < average2 ? average1 : average2;
    let bigger = average1 > average2 ? average1 : average2;
    console.log(`Середнє першого масиву: ${average1}`)
    console.log(`Середнє другого масиву: ${average2}`)

    let arr3 = []

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] >= lower && arr1[i] <= bigger){
            arr3.push(arr1[i])
        }
    }
    for(let i = 0; i < arr2.length; i++){
        if(arr2[i] >= lower && arr2[i] <= bigger){
            arr3.push(arr2[i])
        }
    }
    return arr3;
}
let result = middle(arr1, arr2)
console.log(`Масив з двох середніх арифметичних: `, result)