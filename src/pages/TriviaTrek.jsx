import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import Modal from '../components/ui/Modal/modal';
import { getQuestion } from '../utils/Requests';
import Button from '../components/ui/Button';
import QuestionCard from '../components/ui/cards/questionCard/QuestionCard';
import CardOptionItem from '../components/ui/cards/cardOption/cardOptionItem';
function TriviaTrek() {
    const [searchParams] = useSearchParams();
    const {id:category} = useParams();
   const difficulty =  searchParams.get('difficulty')
   const numberOfQuestions = searchParams.get('number')
   const [modal, setModal] = useState(false);
   const [score, setScore] = useState(0);
   const [isLoading, setIsLoading] = useState(true);
   const [questions, setQuestions] = useState([]);
   const [questionNumber, setQuestionNumber] = useState(0);
   useEffect(() => {
    async function fetchQuestions() {
      try {
        const newQuestion = await getQuestion(
          category,
          difficulty,
          numberOfQuestions
        );
        setQuestions(newQuestion);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        throw new Error("Could not load questions");
      }
    }

    fetchQuestions();
  }, [category, difficulty,numberOfQuestions]);


  const restartQuiz = () => {
    // reset everything to default
    setQuestionNumber(0);
    setScore(0);
  
  };

  const nextQuestion = () => {
    const number = questionNumber + 1;
    if (number >= Number(numberOfQuestions)) {
      setModal(true);
      return;
    }
    setQuestionNumber(number);
  };

  const checkAnswerHandler = (option) => {
    const selectedOption = option; //answer chosen by the user
    const correctAnswer =
      questions[questionNumber].correct_answer === selectedOption; // the correct anser
    if (correctAnswer) setScore((prevScore) => (prevScore += 1)); // if correctAnswer if true add by 1
    nextQuestion();//call next question
  };

console.log()
  return (
    <>
      <main className="flex flex-col sm:justify-start md:justify-center items-center p-6 h-screen  md:p-24  mt-[4rem] md:mt-0 ">
        <div className="w-full flex flex-col items-center ">
          {modal && (
            <Modal score={score} closeModal={setModal} restart={restartQuiz} />
          )}

          {isLoading ? (
            <div className="flex w-full justify-center items-center mt-6">
              <img
                src="/assets/loading.gif"
                alt="loading"
                width={50}
                height={50}
              />
            </div>
          ) : (
            <>
              <div className="my-6">
                <Button label="Restart" onclickHandler={restartQuiz} />
              </div>
              <QuestionCard question={questions[questionNumber]?.question} />
              <div className="grid grid-cols-1 w-full md:grid-cols-2   mt-6 md:w-1/2 gap-3 ">
                <CardOptionItem
                  options={questions[questionNumber]?.allOptions}
                  checkAnswer={checkAnswerHandler}
                />
              </div>
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default TriviaTrek