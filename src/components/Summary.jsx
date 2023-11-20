import quizCompleteImg from "../assets/quiz-complete.png";
import questions from "../questions.js";
import SummaryStats from "./SummaryStats.jsx";

const Summary = ({ userAnswers }) => {
  let index = 0;

  return (
    <div id="summary">
      <img src={quizCompleteImg} />
      <h2>Quiz Completed</h2>

      <SummaryStats userAnswers={userAnswers} />

      <ol>
        {questions.map((question) => (
          <li>
            <h3>{++index}</h3>
            <p className="question">{question.text}</p>
            <p
              className={`user-answer ${
                userAnswers[questions.indexOf(question)].isCorrect && "correct"
              } ${
                userAnswers[questions.indexOf(question)].isSkipped && "skipped"
              } ${
                !userAnswers[questions.indexOf(question)].isCorrect && "wrong"
              }`}
            >
              {userAnswers[questions.indexOf(question)].answer ?? "Skipped"}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Summary;
