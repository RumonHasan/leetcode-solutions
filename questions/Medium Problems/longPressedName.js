const isLongPressName = (name, typed) => {
  const initialApproach92Passed = () => {
    // first level check
    const stackify = (typed) => {
      let typeStack = [];
      for (let index = 0; index < typed.length; index++) {
        const typedChar = typed[index];
        if (typeStack.length && typeStack[typeStack.length - 1] === typedChar) {
          continue;
        } else {
          typeStack.push(typedChar);
        }
      }
      return typeStack;
    };
    let nameStack = stackify(name);
    let newTyped = stackify(typed);

    if (newTyped.length > nameStack.length) return false;
    const genMap = (string) => {
      let map = new Map();
      for (let char of string) {
        map.set(char, (map.get(char) || 0) + 1);
      }
      return map;
    };
    if (nameStack.length > newTyped.length) return false;
    for (let index = 0; index < nameStack.length; index++) {
      if (nameStack[index] !== newTyped[index]) return false;
    }
    if (nameStack.length === newTyped.length) {
      let nameMap = genMap(name);
      let typeMap = genMap(typed);
      for (let [key, value] of nameMap) {
        if (value > typeMap.get(key)) return false;
      }
    }

    return true;
  };

  // two pointer approach
  const correctApproach = () => {
    // primary two pointer approach
    let nIndex = 0;
    let tIndex = 0;
    while (nIndex < name.length && tIndex < typed.length) {
      if (name[nIndex] == typed[tIndex]) {
        nIndex++;
        tIndex++;
        continue;
      }
      // checking the previous char of the nameIndex and returning false if its not the same
      if (nIndex > 0 && name[nIndex - 1] == typed[tIndex]) {
        tIndex++;
      } else {
        return false;
      }
    }
    if (nIndex < name.length) return false;
    // for the remaining long pressed chars in the typed word
    while (tIndex < typed.length) {
      if (name[name.length - 1] !== typed[tIndex]) {
        return false;
      }
      tIndex++;
    }

    return true;
  };

  console.log(correctApproach());
};

console.log(isLongPressName('alex', 'aaleexa'));
