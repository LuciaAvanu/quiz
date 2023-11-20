const SummaryStats = ({ userAnswers }) => {
  let skipped = 0;
  let correct = 0;
  let incorrect = 0;
  const totalQuestions = userAnswers.length;

  userAnswers.map((answer) => {
    if (answer.isCorrect) {
      correct++;
    } else if (answer.isSkipped) {
      skipped++;
    } else {
      incorrect++;
    }
  });
  return (
    <div id="summary-stats">
      <p>
        <span className="number">
          {((skipped / totalQuestions) * 100).toFixed(1)}%
        </span>
        <span className="text">skipped</span>
      </p>
      <p>
        <span className="number">
          {((correct / totalQuestions) * 100).toFixed(1)}%
        </span>
        <span className="text">correct</span>
      </p>
      <p>
        <span className="number">
          {((incorrect / totalQuestions) * 100).toFixed(1)}%
        </span>
        <span className="text">incorrect</span>
      </p>
    </div>
  );
};

export default SummaryStats;
