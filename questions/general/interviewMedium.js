const closeDivTags = (string) => {
  let index = 0;
  let bracketStart = '<';
  let result = '';
  let check = false;
  while (index < string.length) {
    if (string[index] === bracketStart) {
      const divCheck = string.slice(index, index + 5);
      if (divCheck === '<div>') {
        if (!check) {
          result += '<div>';
          index += 5;
          check = true;
          continue;
        } else if (check) {
          result += '</div>';
          index += 5;
          check = false;
        }
      } else {
        result += string[index];
        index++;
      }
    } else {
      result += string[index];
      index++;
    }
  }
  return result;
};

// console.log(
//   closeDivTags('<div><div><p>There is something here<div><div><div><div><p>')
// );
