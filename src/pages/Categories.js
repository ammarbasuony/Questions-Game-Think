import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

// Server
import getCategories from "../api/getCategories";

// Actions
import { addPlayerCategory, addResetState } from "../store/actions";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.playerReducer);
  const questionsData = useSelector((state) => state.questionsReducer);

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    if (!state.player_name) {
      navigate("/");
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    if (questionsData.number_of_categories === 3) {
      navigate("/score");
    }
  }, [questionsData.number_of_categories]);

  const startGame = () => {
    if (!categoryId) return toast.error("Please select a category");
    dispatch(addPlayerCategory(categoryId));
    dispatch(addResetState());
    navigate("/questions");
  };

  return (
    <div className="w-1/2 mt-28">
      <h1 className="font-poppins font-bold text-slate-600 text-2xl text-center">
        Questions Category
      </h1>
      <div
        className={`${
          categoryId === -1 ? "bg-primary" : "bg-slate-700"
        } text-white font-poppins rounded-md py-4 px-5 cursor-pointer mt-5 text-center mb-1 flex items-center justify-center`}
        onClick={() => {
          if (categoryId === -1) {
            setCategoryId("");
          } else {
            setCategoryId(-1);
          }
        }}
      >
        Random Questions
      </div>
      <div className="flex flex-wrap mt-4 gap-2 h-80 overflow-auto">
        {categories.length
          ? categories?.map((category) => (
              <div
                key={category.id}
                className={`${
                  categoryId === category.id
                    ? "bg-primary"
                    : state.selectedCategories.includes(category.id)
                    ? "bg-slate-300"
                    : "bg-slate-400"
                } text-white font-poppins rounded-md py-4 px-5 ${
                  !state.selectedCategories.includes(category.id)
                    ? "cursor-pointer"
                    : ""
                } column-1-3 text-center mb-1 flex items-center justify-center`}
                onClick={() => {
                  if (state.selectedCategories.includes(category.id)) return;

                  if (categoryId === category.id) {
                    setCategoryId("");
                  } else {
                    setCategoryId(category.id);
                  }
                }}
              >
                {category.name}
              </div>
            ))
          : ""}
      </div>
      <div className="mt-5 flex justify-center">
        <button
          className="bg-slate-500 text-white py-2 px-7 w-36 font-poppins font-bold rounded-md"
          onClick={() => startGame()}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Categories;
