const checkRecord = (s) => {
  let lateDays = [];
  let absentDays = [];
  for (let index in s) {
    if (s[index] === 'A') {
      absentDays.push(s[index]);
    }
  }
  // getting late consequtive days
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      count++;
    }
    if (s[i] !== 'L') {
      lateDays.push(count);
      count = 0;
    }
    if (i === s.length - 1 && s[i] === 'L') {
      lateDays.push(count);
    }
  }
  let firstCheck = false;
  let secondCheck = false;
  if (absentDays.length < 2) {
    firstCheck = true;
  }
  if (lateDays.some((day) => day >= 3)) {
    secondCheck = false;
  } else {
    secondCheck = true;
  }
  return firstCheck && secondCheck;
};

// console.log(checkRecord('LALL'));
