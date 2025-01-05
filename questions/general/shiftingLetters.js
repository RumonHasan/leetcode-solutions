const shiftingLetters = (s, shifts) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let pref = new Array(shifts.length).fill(0); // needs total shifts from its position
  pref[pref.length - 1] = shifts[shifts.length - 1];
  for (let i = shifts.length - 2; i >= 0; i--) {
    pref[i] = pref[i + 1] + shifts[i];
  }

  // have to change based on the total shifts from the end
  let res = '';
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    const currPos = pref[i];
    const alphaPos = alphabet.indexOf(currChar);
    const newPos = (currPos + alphaPos) % 26; // to offset it by 26 if its more
    res += alphabet[newPos];
  }
  return res;
};

console.log(shiftingLetters('abc', [3, 5, 9]));
