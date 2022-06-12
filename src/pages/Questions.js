import React from "react";

const Questions = () => {
  return (
    <div className="w-2/3">
      <div className="font-poppins inline-block text-center text-secondary font-bold">
        Answer Time
        <div>1:30:00</div>
      </div>

      <div className="mt-10">
        <div className="text-center font-poppins font-bold text-3xl leading-relaxed text-slate-600">
          Occaecat irure reprehenderit dolore in est do eu adipisicing aute
          nostrud tempor laboris esse. ?
        </div>

        <div className="flex flex-wrap mt-10 gap-2 justify-center">
          <div className="bg-slate-400 text-white font-poppins rounded-md py-4 px-5 cursor-pointer column-1-4 text-center mb-1">
            Category Name
          </div>
          <div className="bg-slate-400 text-white font-poppins rounded-md py-4 px-5 cursor-pointer column-1-4 text-center mb-1">
            Category Name
          </div>
          <div className="bg-slate-400 text-white font-poppins rounded-md py-4 px-5 cursor-pointer column-1-4 text-center mb-1">
            Category Name
          </div>
          <div className="bg-slate-400 text-white font-poppins rounded-md py-4 px-5 cursor-pointer column-1-4 text-center mb-1">
            Category Name
          </div>
        </div>

        <div className="mt-10 flex justify-between w-2/4 mx-auto">
          <button className="bg-slate-500 text-white py-2 px-7 w-36 font-poppins font-bold rounded-md">
            Skip
          </button>
          <button className="bg-slate-500 text-white py-2 px-7 w-36 font-poppins font-bold rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
