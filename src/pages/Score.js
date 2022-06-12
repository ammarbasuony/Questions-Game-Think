import React from "react";
import { useNavigate } from "react-router-dom";
import { Chart } from "react-google-charts";

const Score = () => {
  const navigate = useNavigate();

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    backgroundColor: "transparent",
  };

  return (
    <div className="w-2/3 mt-24">
      <div className="font-poppins inline-block text-center text-slate-700 text-2xl font-bold">
        Ammar Yaser
      </div>

      <div className="mt-10 flex gap-3">
        <div className="py-12 text-center w-full bg-slate-200 text-2xl font-poppins text-slate-600 flex items-center justify-center">
          <div>
            Time
            <div className="mt-3">
              <span className="font-bold">2</span> mins
            </div>
          </div>
        </div>
        <div className="py-11 text-center w-full bg-slate-200 text-2xl font-poppins text-slate-600">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"200px"}
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className="bg-slate-500 text-white py-2 px-7 w-44 font-poppins font-bold rounded-md"
          onClick={() => navigate("/")}
        >
          New Game
        </button>
      </div>
    </div>
  );
};

export default Score;
