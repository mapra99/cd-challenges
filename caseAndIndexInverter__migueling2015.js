// this is from https://edabit.com/challenge/TYcMysG6yy4RKEQPP

function invert(s) {
	let text_mirror="";
    let n=s.length;
    let i=n-1;
    while (i>=0) {
        let the_char=s.charAt(i);
        if (the_char==the_char.toLowerCase()) {
            the_char=the_char.toUpperCase();
        } else {
            the_char=the_char.toLowerCase();
        }

        text_mirror+=the_char;
        // console.log(s.charAt(i))
        i-=1;
    }
    return text_mirror;
}

test_in="ytInIUgAsnOc";
console.log(`${test_in} -- ${invert(test_in)}`);

test_in="step on NO PETS";
console.log(`${test_in} -- ${invert(test_in)}`);

test_in="XeLPMoC YTiReTXeD";
console.log(`${test_in} -- ${invert(test_in)}`);
