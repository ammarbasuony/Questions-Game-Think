import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Server
import getQuestions from "../api/getQuestions";

// Actions
import {
  addNumberOfQuestions,
  addNumberOfCorrectAnswers,
  addNumberOfWrongAnswers,
  addNumberOfSkippedQuestions,
  addTotalTimeSpent,
} from "../store/actions";

const Questions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.playerReducer);
  const questionsData = useSelector((state) => state.questionsReducer);

  const [questions, setQuestions] = useState([]);
  const [currrentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [timer, setTimer] = useState("");
  const [timerInterval, setTimerInterval] = useState("");
  const [timerInSecondes, setTimerInSeconds] = useState(0);
  const [isTimeOut, setIsTimeOut] = useState(false);

  const timers = {
    easy: 90,
    medium: 60,
    hard: 30,
  };

  const fetchQuestions = async () => {
    const data = await getQuestions(
      10,
      state.category,
      state.difficulty,
      state.session_token
    );
    const finalQuestions = data.map((question) => {
      const allAnsewrs = question.incorrect_answers.concat(
        question.correct_answer
      );
      const shuffledAnswers = allAnsewrs.sort(() => Math.random() - 0.5);
      return {
        ...question,
        all_answers:
          question.type === "multiple"
            ? shuffledAnswers
            : allAnsewrs.sort().reverse(),
      };
    });
    setQuestions(finalQuestions);
  };

  // function to count down timer
  const countDown = () => {
    clearInterval(timerInterval);

    let time =
      state.difficulty === "easy"
        ? 90
        : state.difficulty === "medium"
        ? 60
        : 30;

    const x = setInterval(() => {
      let minutes = Math.floor(time / 60);
      let seconds = Math.floor(time % 60);
      setTimer(`${minutes}:${seconds}`);
      setTimerInSeconds(time);
      time--;

      if (time <= -1) {
        clearInterval(x);
        setIsTimeOut(true);
      }
    }, 1000);

    setTimerInterval(x);
  };

  const nextQuestion = () => {
    setIsTimeOut(false);
    if (selectedAnswer === "") {
      return toast.error("Please select an answer");
    }

    if (selectedAnswer === questions[currrentQuestion].correct_answer) {
      dispatch(addNumberOfCorrectAnswers());
    } else {
      dispatch(addNumberOfWrongAnswers());
    }

    dispatch(addNumberOfQuestions());

    dispatch(addTotalTimeSpent(timers[state.difficulty] - timerInSecondes));

    if (currrentQuestion < questions.length - 1) {
      setCurrentQuestion(currrentQuestion + 1);
    }

    setSelectedAnswer("");
  };

  const skipQuestion = () => {
    setIsTimeOut(false);
    dispatch(addNumberOfSkippedQuestions());
    dispatch(addTotalTimeSpent(timers[state.difficulty] - timerInSecondes));

    dispatch(addNumberOfQuestions());

    if (currrentQuestion < questions.length - 1) {
      setCurrentQuestion(currrentQuestion + 1);
    }

    setSelectedAnswer("");
  };

  useEffect(() => {
    if (!state.player_name) {
      navigate("/");
    }

    fetchQuestions();
  }, []);

  useEffect(() => {
    countDown();
  }, [currrentQuestion]);

  useEffect(() => {
    if (isTimeOut) {
      skipQuestion();
    }
  }, [isTimeOut]);

  useEffect(() => {
    if (questionsData.number_of_questions === 3) {
      navigate("/categories");
    }
  }, [questionsData.number_of_questions]);

  return (
    <div className="w-2/3">
      <div className="font-poppins inline-block text-center text-secondary font-bold">
        Answer Time
        <div>{timer}</div>
      </div>

      <div className="mt-10">
        <div
          className="text-center font-poppins font-bold text-3xl leading-relaxed text-slate-600"
          dangerouslySetInnerHTML={{
            __html: questions[currrentQuestion]?.question,
          }}
        />

        <div className="flex flex-wrap mt-10 gap-2 justify-center">
          {questions[currrentQuestion]?.all_answers.map((answer, i) => (
            <div
              key={i}
              className={`${
                selectedAnswer === answer ? "bg-primary" : "bg-slate-400"
              } text-white font-poppins rounded-md py-4 px-5 cursor-pointer column-1-4 text-center mb-1 flex items-center justify-center`}
              onClick={() => {
                setSelectedAnswer(answer);
              }}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-between w-2/4 mx-auto">
          <button
            className="bg-slate-500 text-white py-2 px-7 w-36 font-poppins font-bold rounded-md"
            onClick={() => skipQuestion()}
          >
            Skip
          </button>
          <button
            className="bg-slate-500 text-white py-2 px-7 w-36 font-poppins font-bold rounded-md"
            onClick={() => nextQuestion()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
