// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
    arraySplit = '';
    arraySplit1 = '';
    str = s.split('');
    str1 = s.split('');
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            for (let j = 0; j < str.length; j = j + 2) {
                str[j] = str[j].toUpperCase();
                arraySplit = str.join('');

            }
        }
        if (i === 1) {
            for (let j = 1; j < str1.length; j = j + 2) {
                str1[j] = str1[j].toUpperCase();
                arraySplit1 = str1.join('');
            }
        }
    }
    let array = [];
    array.push(arraySplit);
    array.push(arraySplit1)
    console.log(array)
    return array;
};