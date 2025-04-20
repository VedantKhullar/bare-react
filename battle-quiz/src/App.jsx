import React from "react";
import questions from "./assets/Data";
import { useState } from "react";
const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [lives, setLives] = useState(3);

  const selectAnswer = (item, selectedOption) => {
    if (item.answer === selectedOption) {
      setTotalScore(totalScore + 1);
      setQuestionCounter(questionCounter + 1);
    } else {
      setLives(lives - 1);
    }
  };

  return (
    <>
      {lives === 0 ? (
        `Game Over. Final Score: ${totalScore}/10`
      ) : totalScore === questions.length ? (
        `Voilaaa ! You answered all questions correctly with ${lives} lives left.`
      ) : (
        <div>
          <div> lives : {lives}</div>
          <div> score : {totalScore}</div>
          {questions && questions.length
            ? questions.map((item, i) =>
                questionCounter === i ? (
                  <div key={i}>
                    <h3>{item.question}</h3>
                    {item.options && item.options.length
                      ? item.options.map((option, j) => (
                          <div key={j}>
                            <button onClick={() => selectAnswer(item, option)}>
                              {option}
                            </button>
                            <br />
                            <br />
                          </div>
                        ))
                      : "plz add a few options to show"}
                  </div>
                ) : (
                  ""
                )
              )
            : "No questions to ask in the quiz"}
        </div>
      )}
    </>
  );
};

export default App;
