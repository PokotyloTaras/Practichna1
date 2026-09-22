function GeneratingArray(length, min, max){
    let arr = []
    for (let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(random);
    }
    return arr;
}

// масиви-----------------

let arr1 = GeneratingArray(4, -53, 46)
console.log(arr1);

//------------------------

function slice(arr){
    let negative = []
    let positive = []
        for(let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            negative.push(arr[i])
        }
        if (arr[i] >= 0){
            positive.push(arr[i])
        }
    }
        return {negative, positive}
}

const {negative, positive} = slice(arr1)
console.log(`додатні:`, positive)
console.log(`Від'ємні:`, negative)