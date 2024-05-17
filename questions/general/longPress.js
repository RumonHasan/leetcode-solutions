const longPress = (name, typed) => {
  const stringConversion = (str) => {
    let end = 1;
    let checkChar = str.charAt(0);
    let stack = [];
    stack.push(checkChar);
    while (end < str.length) {
      if (str[end] == stack[stack.length - 1]) {
        end++;
      } else {
        stack.push(str[end]);
        end++;
      }
    }
    return stack.join('');
  };

  let nameUnique = stringConversion(name);
  let typeUnique = stringConversion(typed);
  if (nameUnique != typeUnique) {
    return false;
  }
  console.log(nameUnique, typeUnique);
  // second check
  let nameIndex = 1;
  let typeIndex = 1;
  let nChar = name[0];
  let tChar = typed[0];
  let nCounter = 1;
  let tCounter = 1;

  return true;
};

/*


s s a a e d d 

tc - 2 , ti - 2, tchar - a
tc - 1, ti - 3, tchar - a


*/

console.log(longPress('saeed', 'ssaaedd'));
