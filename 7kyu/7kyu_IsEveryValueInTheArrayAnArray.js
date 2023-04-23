// DESCRIPTION:
// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

function arrCheck(value) {
    if (value.length === 0) {
        return true
    }

    let j = 0;

    for (i = 0; i < value.length; i++) {
        if (!Array.isArray(value[i])) {
            j = 1;
        }
    }

    if (j !== 0) {
        return false;
    }

    return true;
}