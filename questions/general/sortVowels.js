const sortVowels = (s) => {
  const vowelHash = {
    a: true,
    i: true,
    e: true,
    o: true,
    u: true,
    A: true,
    I: true,
    E: true,
    O: true,
    U: true,
  };
  let vowelArray = [];
  let sArray = s.split('');
  let vString = '';
  for (let index in s) {
    if (vowelHash[s[index]]) {
      vString += s[index];
      sArray[index] = '';
    }
  }
  for (let index in vString) {
    const charCode = vString.charCodeAt(Number(index));
    vowelArray.push([vString[index], charCode]);
  }
  vowelArray.sort((a, b) => a[1] - b[1]);
  let vIndex = 0;
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] == '') {
      sArray[i] = vowelArray[vIndex][0];
      vIndex++;
    }
  }
  return sArray.join('');
};

console.log(sortVowels('lEetcOde'));
