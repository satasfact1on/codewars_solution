// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name){
    let space = name.indexOf(' '),
            a = name.slice(0, 1).toUpperCase(),
            b = name.slice(space + 1, space + 2).toUpperCase(),
            abbrev = `${a}.${b}`;
    
        return abbrev;
}