function findAverage(array) {
    let length = array.length;
    let sum = 0;
    let average;
    if (length !== 0) {
        for (let i = 0; i < length; i++) {
            sum += array[i];
        }
        average = sum / length;
        return average;
    } else {
        return 0;
    }
}