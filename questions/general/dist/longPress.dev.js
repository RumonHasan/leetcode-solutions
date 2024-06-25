"use strict";

var longPress = function longPress(name, typed) {
  var stringConversion = function stringConversion(str) {
    var end = 1;
    var checkChar = str.charAt(0);
    var stack = [];
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

  var nameUnique = stringConversion(name);
  var typeUnique = stringConversion(typed);

  if (nameUnique != typeUnique) {
    return false;
  }

  console.log(nameUnique, typeUnique); // second check

  var nameIndex = 1;
  var typeIndex = 1;
  var nChar = name[0];
  var tChar = typed[0];
  var nCounter = 1;
  var tCounter = 1;
  return true;
};
/*


s s a a e d d 

tc - 2 , ti - 2, tchar - a
tc - 1, ti - 3, tchar - a


*/


console.log(longPress('saeed', 'ssaaedd'));