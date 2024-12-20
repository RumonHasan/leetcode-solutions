const alertNames = (keyName, keyTime) => {
  // function to assign arithmetic value in order to sort later
  const minuteGenerator = (time) => {
    const timeArr = time.split(':');
    const minutes = Number(timeArr[0]) * 60;
    const extraMins = Number(timeArr[1]);
    return minutes + extraMins;
  };
  // sorting into a map based on keynames
  let map = new Map();
  const LEN = keyName.length;
  for (let i = 0; i < LEN; i++) {
    const currKeyName = keyName[i];
    const currKeyTime = keyTime[i];

    if (map.has(currKeyName)) {
      map
        .get(currKeyName)
        .push({ time: currKeyTime, mins: minuteGenerator(currKeyTime) });
    } else {
      map.set(currKeyName, [
        { time: currKeyTime, mins: minuteGenerator(currKeyTime) },
      ]);
    }
  }
  // sorting based on time using basic time arithmetics
  for (let [key, _] of map) {
    map.get(key).sort((a, b) => a.mins - b.mins);
  }
  let set = new Set(); // needs a counter for time check and minute counter check
  // now checking for three consequtive similar hours
  for (let [key, minVals] of map) {
    // timeCounterMap.set(key, )
    for (let i = 0; i < minVals.length; i++) {
      const checkVal = minVals[i];
      const interval = [checkVal.mins, checkVal.mins + 60];
      let counter = 1;
      for (let j = i + 1; j < minVals.length; j++) {
        const currMinValMins = minVals[j].mins;
        if (currMinValMins >= interval[0] && currMinValMins <= interval[1]) {
          counter++;
        }
      }
      if (counter >= 3) {
        if (set.has(key)) {
          break;
        }
        set.add(key);
      }
    }
  }
  return [...set].sort();
};

console.log(
  alertNames(
    ['leslie', 'leslie', 'leslie', 'clare', 'clare', 'clare', 'clare'],
    ['13:00', '13:20', '14:00', '18:00', '18:51', '19:30', '19:49']
  )
);
