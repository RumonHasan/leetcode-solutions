const isValidPalindrome = (s) => {
  const initialApproachHackyWay = () => {
    const letterCheck = (char) => {
      return /^[a-z]$/i.test(char);
    };
    let filteredString = '';
    for (let index = 0; index < s.length; index++) {
      const char = s[index];
      if (!isNaN(Number(char))) {
        filteredString += char;
        continue;
      }
      if (char !== ' ' && letterCheck(char)) {
        filteredString += char.toLowerCase();
      }
    }
    const palindromeCheck = (s) => {
      let right = s.length - 1;
      let left = 0;
      while (left < right) {
        if (s[left] !== s[right]) {
          return false;
        }
        right--;
        left++;
      }
      return true;
    };
    return palindromeCheck(filteredString.split(' ').join(''));
  };
};
//console.log(isValidPalindrome('A man, a plan, a canal: Panama'));
