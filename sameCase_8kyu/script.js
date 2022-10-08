//DESCRIPTION:
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return (-1)
// If both characters are the same case, return (1)
// If both characters are letters, but not the same case, return (0)

function sameCase(a, b){
    if ((typeof(a) == 'string') && typeof(b) == 'string' && (a.toLowerCase() != a.toUpperCase()) && b.toLowerCase() != b.toUpperCase()) {
        if (a.includes(a.toUpperCase()) && b.includes(b.toUpperCase()) || a.includes(a.toLowerCase()) && b.includes(b.toLowerCase())) {
            return 1;
        } else {
            return 0;
        }
    } else {
        return -1;
    }
}