const findReplaceString = (s, indices, sources, targets) => {
  let stack = [];
  let index = 0;
  let map = new Map();
  for (let i = 0; i < indices.length; i++) {
    if (!map.has(indices[i])) {
      map.set(indices[i], []);
    }
    map.get(indices[i]).push([sources[i], targets[i]]); //pushing all the multiple indices combinations
  }
  while (index < s.length) {
    const currChar = s[index];
    if (map.has(index)) {
      const replacements = map.get(index);
      let matched = false;
      // if replacement is found them add it to stack and put matched as true and break
      for (let [source, target] of replacements) {
        const slice = s.slice(index, index + source.length);
        if (slice === source) {
          stack.push(target);
          index += source.length;
          matched = true;
          break;
        }
      }
      if (!matched) {
        // if there is no match but index present then just push the curr char and move to the next
        index++;
        stack.push(currChar);
      }
    } else {
      stack.push(currChar);
      index++;
    }
  }

  return stack.join('');
};

console.log(
  findReplaceString(
    'abcde',
    [2, 2, 3],
    ['cde', 'cdef', 'dk'],
    ['fe', 'f', 'xyz']
  )
);

// abfe
