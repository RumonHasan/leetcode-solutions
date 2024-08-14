const countSandwich = (students, sandwiches) => {
  // simple while true approach
  let end = 0;
  let remainingStudents = 0;
  let shiftCounter = 0;
  while (true) {
    if (sandwiches.length === 0 || students.length === 0) break;
    if (shiftCounter === sandwiches.length) break;
    const currSand = sandwiches[end];
    const currStudent = students[end];
    if (currSand === currStudent) {
      students.shift();
      sandwiches.shift();
      shiftCounter = 0;
    } else if (currSand !== currStudent) {
      students.push(students.shift());
      shiftCounter++;
    }
  }
  remainingStudents = students.length;
  return remainingStudents;
};

//console.log(countSandwich([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));

/*

1 1 0 0     0 0 1 1

1001
0011
011
11 11


11001 - 00011
10011
00111
0111 - 0011
111 - 011
111

*/
