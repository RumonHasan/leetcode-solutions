const slowestKey = (releaseTimes, keysPressed) => {
  let chars = [];
  for (let i = 0; i < releaseTimes.length; i++) {
    if (i === 0) {
      chars.push({
        letter: keysPressed[i],
        time: releaseTimes[i],
      });
    } else {
      chars.push({
        letter: keysPressed[i],
        time: releaseTimes[i] - releaseTimes[i - 1],
      });
    }
  }
  let longest = 0;
  let collection = [];
  for (let index in chars) {
    longest = Math.max(longest, chars[index].time);
  }
  for (let index in chars) {
    if (chars[index].time === longest) {
      collection.push(chars[index].letter);
    }
  }
  collection.sort();
  return collection[collection.length - 1];
};

//console.log(slowestKey([9, 29, 49, 50], 'cbcd'));
