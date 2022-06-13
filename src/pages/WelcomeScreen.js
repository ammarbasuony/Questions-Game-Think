import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

// Actions
import {
  addPlayerName,
  addDifficulty,
  addSessionToken,
} from "../store/actions";

// Server Calls
import getToken from "../api/getToken";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.playerReducer);
  const [playerName, setPlayerName] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");

  const difficulties = [
    {
      name: "easy",
      label: "Easy",
    },
    {
      name: "medium",
      label: "Medium",
    },
    {
      name: "hard",
      label: "Hard",
    },
  ];

  const selectCategory = async () => {
    if (!playerName) return toast.error("Please enter your name");
    if (!difficultyLevel) return toast.error("Please select the difficulty");

    const token = await getToken();

    dispatch(addPlayerName(playerName));
    dispatch(addDifficulty(difficultyLevel));
    dispatch(addSessionToken(token));

    if (token) {
      navigate("categories");
    }
  };

  useEffect(() => {
    if (state.player_name) {
      navigate("categories");
    }
  }, []);

  return (
    <div className="w-1/3">
      <h1 className="font-poppins text-gray-600 text-md text-center">
        To start the game, type your name and choose game difficulty
      </h1>
      <div className="bg-slate-200 p-8 w-full mt-6 rounded-xl">
        <input
          type="text"
          placeholder="Player Name"
          className="w-full p-2 px-3 rounded-md focus:outline-none font-poppins"
          onChange={(e) => setPlayerName(e.target.value)}
        />

        <div className="mt-5 flex justify-center">
          {difficulties.map((difficulty, i) => (
            <div
              key={i}
              className={`p-1 border-4 rounded-xl ${
                difficulty.name === difficultyLevel ? "border-gray-400" : ""
              }`}
              onClick={() => setDifficultyLevel(difficulty.name)}
            >
              <div
                className={`${
                  difficulty.name === "easy"
                    ? "bg-secondary"
                    : difficulty.name === "medium"
                    ? "bg-tertiary"
                    : difficulty.name === "hard"
                    ? "bg-quaternary"
                    : ""
                } text-white font-poppins rounded-md py-4 px-5 cursor-pointer`}
              >
                {difficulty.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <button
          className="bg-slate-500 text-white py-2 px-7 w-36 font-poppins font-bold rounded-md"
          onClick={() => selectCategory()}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
