// This is from https://edabit.com/challenge/aHFBLwgCPKBoAcJAA

function squares(a, b) {
    let count=0;
    let i=1;
    while (i**2<=b) {
        if (i**2>=a) {
            count++;
        }
        i++;
    }
    return count;
}

console.time('test');
console.log(`${squares(3,9)} -- ${squares(3,9)==2}`);
console.timeEnd('test');

console.time('test');
console.log(`${squares(17,24)} -- ${squares(17,24)==2}`);
console.timeEnd('test');

console.time('test');
console.log(`${squares(1, 1000000000)} -- ${squares(1, 1000000000)==2}`);
console.timeEnd('test');