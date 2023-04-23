// DESCRIPTION:
// Write a function called findUnique which returns the only unique number from an array.

// All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.

// Example
// Input:
// [ 1, 8, 4, 4, 6, 1, 8 ]
// Expected output:
// 6

function findUnique(A) {
    let freq = A.reduce((acc, curr) => {
        if (acc[curr]) {
        acc[curr]++;
        } else {
        acc[curr] = 1;
        }
        return acc;
    }, {});

    for (let i = 0; i < A.length; i++) {
        if (freq[A[i]] === 1) {
        return A[i];
        }
    }

}