const maxCompatibilityScore = (students, mentors) => {
  // function to calculate the score
  const calculateCompatibility = (student, mentor) => {
    let currScore = 0;
    for (let i = 0; i < student.length; i++) {
      const studentScore = student[i];
      const mentorScore = mentor[i];
      if (studentScore === mentorScore) {
        currScore++;
      }
    }
    return currScore;
  };

  let usedMentorIndices = new Set(); // to keep track of the currently used mentor index

  // main backtrack function get all the valid combinations
  const backtrack = (currStudentIndex) => {
    // base case
    if (currStudentIndex >= students.length) {
      return 0;
    }

    let score = 0;
    // checking through all the mentors
    for (let mentorIndex = 0; mentorIndex < mentors.length; mentorIndex++) {
      if (usedMentorIndices.has(mentorIndex)) continue;
      const currMentor = mentors[mentorIndex];
      usedMentorIndices.add(mentorIndex); // adding the current mentor index to keep track

      // getting the max score between the existing combination and old combination
      score = Math.max(
        score,
        calculateCompatibility(students[currStudentIndex], currMentor) +
          backtrack(currStudentIndex + 1)
      );

      usedMentorIndices.delete(mentorIndex); // removing it to explore other paths
    }

    return score;
  };

  return backtrack(0);
};

// using dfs and backtracking to check possible max compatitibility sum@
console.log(
  maxCompatibilityScore(
    [
      [1, 1, 0],
      [1, 0, 1],
      [0, 0, 1],
    ],
    [
      [1, 0, 0],
      [0, 0, 1],
      [1, 1, 0],
    ]
  )
);
