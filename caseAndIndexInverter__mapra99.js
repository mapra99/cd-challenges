// https://edabit.com/challenge/TYcMysG6yy4RKEQPP

function invert(s) {
  const newS = s.split('');
  const n = newS.length - 1;
  for (let i = s.length - 1; i >= newS.length / 2; i--) {
    const j = n - i;
    const temp = newS[j];
    newS[j] = changeCase(newS[i]);
    newS[i] = changeCase(temp);
  }
  if (n % 2 === 0) newS[n / 2] = changeCase(newS[n / 2]);

  return newS.join('');
}

function changeCase(s) {
  return s === s.toLowerCase() ? s.toUpperCase() : s.toLowerCase();
}

invert('ConsanGuinitY');