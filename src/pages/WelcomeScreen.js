import React from "react";

const WelcomeScreen = () => {
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
        />

        <div className="mt-5 flex justify-center">
          <div className="p-1 border-4 rounded-xl">
            <div className="bg-secondary text-white font-poppins rounded-md py-4 px-5 cursor-pointer">
              Easy
            </div>
          </div>
          <div className="p-1 border-4 rounded-xl">
            <div className="bg-tertiary text-white font-poppins rounded-md py-4 px-5 cursor-pointer">
              Medium
            </div>
          </div>
          <div className="p-1 border-4 rounded-xl">
            <div className="bg-quaternary text-white font-poppins rounded-md py-4 px-5 cursor-pointer">
              Hard
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <button className="bg-slate-500 text-white py-2 px-7 w-36 font-poppins font-bold rounded-md">
          Play
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
