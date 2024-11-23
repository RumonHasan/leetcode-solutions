"use strict";

var removeAllOccurenceSubstring = function removeAllOccurenceSubstring(s, part) {
  var stack = [];
  var end = 0;

  while (end < s.length) {
    stack.push(s[end]); // keep adding chars till its same as part

    if (stack.length >= part.length && stack[stack.length - 1] === part[part.length - 1]) {
      var lastPartSlice = stack.slice(-part.length).join(''); // reverse slice is for checking backwards

      if (lastPartSlice === part) {
        for (var i = 0; i < part.length; i++) {
          stack.pop();
        }
      }
    }

    end++;
  }

  return stack.join('');
}; //console.log(removeAllOccurenceSubstring('daabcbaabcbc', 'abc'));