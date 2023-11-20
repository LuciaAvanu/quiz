import { useCallback } from "react";
import ProgressTimer from "./ProgressTimer";

const Question = ({ question, handleSelectAnswer }) => {
  const correctAnswer = question.answers[0];
  const shuffledAnswers = [...question.answers].sort((a, b) => 0.5 - Math.random());

  const validateAnswer = useCallback(
    function validateAnswer(answer) {
      if (answer === null) {
        console.log("null")
        handleSelectAnswer({
          answer: answer,
          isSkipped: true,
        });
        
      } else if (answer === correctAnswer) {
        console.log("correct")
        handleSelectAnswer({
          answer: answer,
          isCorrect: true,
        });
      } else if (answer !== correctAnswer) {
        console.log("wrong")
        handleSelectAnswer({
          answer: answer,
          isCorrect: false,
        });
      }
    },
    [handleSelectAnswer]
  );

  return (
    <div id="question">
      <ProgressTimer timeout={15000} validateAnswer={validateAnswer} />
      <h2>{question.text}</h2>

      <ul id="answers">
        {shuffledAnswers.map((answer) => (
          <li className="answer" key={Math.random()}>
            <button className="answer" onClick={() => validateAnswer(answer)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
