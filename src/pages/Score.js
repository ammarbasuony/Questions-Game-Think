import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Chart } from "react-google-charts";

// Actions
import { startNewGame } from "../store/actions";

const Score = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.playerReducer);
  const questionsData = useSelector((state) => state.questionsReducer);

  const [score, setScore] = React.useState([
    ["Results", "Total Time Tpent"],
    ["Correct Anwers", 0],
    ["Wrong Answers", 0],
    ["Skipped Questions", 0],
  ]);

  const options = {
    backgroundColor: "transparent",
  };

  useEffect(() => {
    if (!questionsData.number_of_categories) {
      navigate("/");
    }

    setScore([
      ["Results", "Total Time Tpent"],
      ["Correct Anwers", questionsData.total_of_correct_answers],
      ["Wrong Answers", questionsData.total_of_wrong_answers],
      ["Skipped Questions", questionsData.total_of_skipped_questions],
    ]);
  }, []);

  return (
    <div className="w-2/3 mt-24">
      <div className="font-poppins inline-block text-center text-slate-700 text-2xl font-bold">
        {state.player_name}
      </div>

      <div className="mt-10 flex gap-3">
        <div className="py-12 text-center w-full bg-slate-200 text-2xl font-poppins text-slate-600 flex items-center justify-center">
          <div>
            Time
            <div className="mt-3">
              <span className="font-bold">
                {Math.floor(questionsData.total_time_spent / 60)}
              </span>{" "}
              Mins
            </div>
            <div className="mt-1">
              <span className="font-bold">
                {Math.floor(questionsData.total_time_spent % 60)}
              </span>{" "}
              Seconds
            </div>
          </div>
        </div>
        <div className="py-11 text-center w-full bg-slate-200 text-2xl font-poppins text-slate-600">
          <Chart
            chartType="PieChart"
            data={score}
            options={options}
            width={"100%"}
            height={"200px"}
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className="bg-slate-500 text-white py-2 px-7 w-44 font-poppins font-bold rounded-md"
          onClick={() => {
            dispatch(startNewGame());
            navigate("/");
          }}
        >
          New Game
        </button>
      </div>
    </div>
  );
};

export default Score;
