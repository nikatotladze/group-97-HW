// Default 
function calculateAverage(score1, score2, score3, score4, score5) {
  let average = (score1 + score2 + score3 + score4 + score5) / 5;
  return average;
}





// Anonymous 
const userScores = function () {
  let score1 = Number(prompt("შეიყვანე პირველი ქულა:"));
  let score2 = Number(prompt("შეიყვანე მეორე ქულა:"));
  let score3 = Number(prompt("შეიყვანე მესამე ქულა:"));
  let score4 = Number(prompt("შეიყვანე მეოთხე ქულა:"));
  let score5 = Number(prompt("შეიყვანე მეხუთე ქულა:"));

  return calculateAverage(score1, score2, score3, score4, score5);
};






// Arrow Function
const showResult = () => {
  let result = userScores();
  console.log("საშუალო ქულაა:", result);
};

showResult();