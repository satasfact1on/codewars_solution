// DESCRIPTION:
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

function century(year) {
    let str = (String(year)),
        a = Number(str.slice(0, str.length - 2)),
        b = Number(str.slice(str.length - 2, str.length)),
        century;
    if (str.length == 1 || str.length == 2) {
        century = 1;
    } else {
        if (b > 0) {
            century = a + 1;
        } else {
            century = a;
        }
    }
    return century;
}