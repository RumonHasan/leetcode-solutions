const countStudents = (students, sandwiches) => {
  const intuitiveApproach = () => {
    let rotation = 0;
    while (sandwiches.length > 0) {
      const sandwich = sandwiches[0];
      const student = students[0];
      if (sandwich === student) {
        sandwiches.shift();
        students.shift();
        rotation = 0;
      }
      // if students are keep on repeating then break code cuz nobody can eat
      if (sandwich !== student) {
        students.push(students.shift());
        rotation++;
        if (rotation === students.length) break;
      }
    }
    return students.length;
  };
  //   console.log(intuitiveApproach());
};

// console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));

/*
 [1,1,1,0,0,1], [1,0,0,0,1,1]
 [1,1,0,0,1], [0,0,0,1,1]
 [1,0,0,1,1]
 [0,0,,1,1,1]
 [0,1,1,1] [0,0,1,1]
 [1,1,1] [0,1,1]
    



*/
