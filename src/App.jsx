import { useState, useCallback } from "react";
import questions from "./questions.js";

import Question from "./components/Question.jsx";
import Header from "./components/Header.jsx";
import Summary from "./components/Summary.jsx";

console.log(questions)

function App() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestion = questions[userAnswers.length];
  console.log(activeQuestion)
  const quizCompleted = userAnswers.length === questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    answerObj
  ) {
    setUserAnswers((prevAnswers) => [...prevAnswers, answerObj]);
  },
  []);

  if (quizCompleted) {
    return (
      <Summary userAnswers={userAnswers}/>
    );
  } else {
    return (
      <>
        <Header />

        <div id="quiz">
          <Question
            question={activeQuestion}
            key={activeQuestion.id}
            handleSelectAnswer={handleSelectAnswer}
          />
        </div>
      </>
    );
  }
}

export default App;
