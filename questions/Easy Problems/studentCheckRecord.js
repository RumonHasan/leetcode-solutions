const studentCheckRecord = (s) => {
  let presentCounter = 0;
  let absentCounter = 0;
  let lateCheck = false;
  let index = 0;
  while (index < s.length) {
    let localLateCounter = 0;
    s[index] === 'P' && presentCounter++;
    s[index] === 'A' && absentCounter++;
    if (s[index] === 'L') {
      // one pass iteration
      while (s[index] === 'L' && index < s.length) {
        localLateCounter++;
        index++;
      }
    } else {
      index++;
    }
    if (localLateCounter >= 3) {
      lateCheck = true;
    }
  }
  if (absentCounter < 2 && !lateCheck) {
    return true;
  }
  return false;
};

//console.log(studentCheckRecord('ALLAPPL'));
