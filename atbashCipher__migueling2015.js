// This is from https://edabit.com/challenge/xkBFTcHuJTXmrLwjw

function atbash(str) {
    let str_response='';
    const letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for (let i = 0; i < str.length; i++) {
        let letter=str.charAt(i);
        if (letters.indexOf(letter.toUpperCase())>-1) {
            letter==letter.toUpperCase()
            ?str_response+=letters[letters.length-1-letters.indexOf(letter.toUpperCase())]
            :str_response+=letters[letters.length-1-letters.indexOf(letter.toUpperCase())].toLowerCase()
        } else {
            str_response+=letter;
        } 
    }
    return str_response;
}


str="apple";
str_answer="zkkov";
console.group()
console.log(atbash(str));
console.log(atbash(str)==str_answer)
console.groupEnd()

str="Hello world!";
str_answer="Svool dliow!"
console.group()
console.log(atbash(str));
console.log(atbash(str)==str_answer)
console.groupEnd()

str="Christmas is the 25th of December";
str_answer="Xsirhgnzh rh gsv 25gs lu Wvxvnyvi";
console.group()
console.log(atbash(str));
console.log(atbash(str)==str_answer)
console.groupEnd()