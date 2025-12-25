const studentReport = {
  overallScore: 6,
  scores: {
    pronunciation: 7,
    fluency: 6.5,
    vocabulary: 7.5,
    grammar: 6
  }
};

function getFeedback(score) {
  if (score >= 8) {
    return "Excellent performance with strong control.";
  } else if (score >= 6) {
    return "Good performance with minor inaccuracies.";
  } else {
    return "Needs improvement.";
  }
}

document.getElementById("overallScore").innerText =
  studentReport.overallScore + " / 9";

document.getElementById("pronunciation").style.width =
  (studentReport.scores.pronunciation / 9) * 100 + "%";

document.getElementById("fluency").style.width =
  (studentReport.scores.fluency / 9) * 100 + "%";

document.getElementById("vocabulary").style.width =
  (studentReport.scores.vocabulary / 9) * 100 + "%";

document.getElementById("grammar").style.width =
  (studentReport.scores.grammar / 9) * 100 + "%";

document.getElementById("overallFeedback").innerText =
  getFeedback(studentReport.overallScore);
