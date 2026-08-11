function getAverage(scores) {
  let sum = 0;
  for (let score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

// console.log(getAverage([80, 90, 100]));

function getGrade(score) {
  const grades = [
    { min: 100, grade: "A+" },
    { min: 90, grade: "A" },
    { min: 80, grade: "B" },
    { min: 70, grade: "C" },
    { min: 60, grade: "D" },
    { min: 0, grade: "F" },
  ];

  return grades.find(({ min }) => score >= min).grade;
}

// console.log(getGrade(99));

function hasPassingGrade(score) {
  let grade = getGrade(score);
  return grade != "F";
}

// console.log(hasPassingGrade(75));

function studentMsg(scores, studentScore) {
  const media = getAverage(scores);
  const grade = getGrade(studentScore);
  const isPassingGrade = hasPassingGrade(studentScore);

  if (!isPassingGrade)
    return `Class average: ${media}. Your grade: ${grade}. You failed the course.`;

  return `Class average: ${media}. Your grade: ${grade}. You passed the course.`;
}

console.log(studentMsg([80, 90, 100], 95));
