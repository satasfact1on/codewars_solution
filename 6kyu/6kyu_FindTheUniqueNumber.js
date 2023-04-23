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