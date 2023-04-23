// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.

function rowWeights(array){
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < array.length; i = i + 2) {
        sumEven = sumEven + array[i];
    }

    for (let i = 1; i < array.length; i = i + 2) {
        sumOdd = sumOdd + array[i];
    }
    let arrayNew = [];
    arrayNew.push(sumEven);
    arrayNew.push(sumOdd)
    return arrayNew;
}